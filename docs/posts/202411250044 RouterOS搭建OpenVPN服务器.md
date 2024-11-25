---
title: 使用Mikrotik的RouterOS搭建OpenVPN服务器，以及配置内网互连
lang: zh-CN
date: 2024-11-25 00:40:25
author: makaspacex
cover: 
tags:
- mikrotik
- ovpn
- openvpn
---

# 使用Mikrotik的RouterOS搭建OpenVPN服务器，以及配置内网互连


此前一直使用CentOS运行OpenVPN多客户端程序，并在RouterOS将远程子网路由到此机器上，配置上有点复杂，也可能存在性能问题。

因此，这次打算直接在我所使用的网关RouterOS上配置。

### 0、简述环境

简单描述一下网络坏境，假设现在有两个网段，一个为家庭内网，一个为公司内网。

家庭网络拥有网关权限，所以可以将OpenVPN服务端部署在家庭网关上。这也是这次主要调整的地方。

在此之前，服务端部署在家庭内网中的一台CentOS中，和客户端模式一致。这需要在网关配置路由，将OpenVPN的流量路由到CentOS，多了几次跳转。

而公司内网因为没有网关的配置权限，所以仍然延续此前的模式。

网络拓扑说明，懒得画图，将就一下，自行脑部出画面就好。

*   192.168.88.0/24 家庭网络
    
    *   内网卡：lan1，外网卡：wan1
    *   运行服务端
    *   服务运在网关：192.168.88.1
    *   隧道地址：10.10.10.1
    *   路由：192.168.1.0/24 -\> 10.10.10.1
*   192.168.1.0/24 公司网络
    
    *   内网卡：eth0
    *   运行客户端
    *   服务运行在非网关：192.168.1.110
    *   隧道地址：10.10.10.2
    *   路由：192.168.88.0/24 -\> 10.10.10.1

### 1、连接RouterOS

本篇采用RouterOS的命令行工具进行操作，可以通过telnet亦或ssh连接到你的网关。

如果使用WinBox，也可以在左侧菜单中点击**New Terminal**打开终端进行操作。

使用终端操作的好处的命令便于复制，无需截图。喜欢用RouterOS的朋友们相对都有一些网络基础，应该习惯使用终端操作。

### 2、使用RouterOS内置证书管理工具创建证书

下面的命令依次创建CA根证书，OpenVPN的Server端证书，一个OpenVPN的客户端证书。
```shell
    /certificate/add name=ovpn-ca \
    common-name=ovpn-ca \
    days-valid=3650 \
    key-size=2048 \
    key-usage=crl-sign,key-cert-sign
    
    /certificate/add name=ovpn-server \
    common-name=ovpn-server \
    days-valid=3650 \
    key-size=2048 \
    key-usage=digital-signature,key-encipherment,tls-server
    
    /certificate/add name=mikrotikax2 \
    common-name=mikrotikax2 \
    days-valid=3650 \
    key-size=2048 \
    key-usage=tls-client
```
> 如果有多个客户端，重复第三条命令，注意须保证每个客户端证书的common-name唯一。

接下来给证书进行签名。
```shell
    /certificate/sign ovpn-ca name=ovpn-ca
    
    /certificate/sign ovpn-server name=ovpn-server ca=ovpn-ca
    
    /certificate/sign mikrotikax2 name=mikrotikax2 ca=ovpn-ca
```
> 如果有多个客户端，重复第三条指令对每个客户端的证书进行签名。后续步骤凡涉及多客户端的，均需要类似操作，不再赘述。

### 2、为OpenVPN分配IP地址池

创建一个IP地址池用于为客户端分配IP，需要给服务端预留地址，服务端地址不能在此范围内。
```shell
    /ip pool add name=ovpn-pool ranges=10.10.10.100-10.10.10.199
```
### 3、创建OpenVPN配置文件

创建一个配置文件，服务器地址为10.10.10.1，远程分配地址为刚刚创建的地址池。dns-server可以设置也可以忽略。
```shell
    /ppp profile add name=ovpn-profile \
    use-encryption=yes \
    local-address=10.10.10.1 \
    remote-address=ovpn-pool \
    change-tcp-mss=yes \
    use-compression=yes \
    use-ipv6=no
```
创建一个密码，用于OpenVPN用户验证，name表示用户名，password为密码，profile为上一步创建的配置文件，service选择ovpn。
```shell
    /ppp secret add name=simaek \
    password=simaek.com \
    profile=ovpn-profile \
    service=ovpn
```
### 4、配置OpenVPN接口

配置OpenVPN接口，默认配置文件使用上一步创建的，证书选择第一步创建的服务端证书，启用客户端证书验证，验证方法选择sha1，加密算法全部选上。
```shell
    /interface ovpn-server server set \
    default-profile=ovpn-profile \
    protocol=tcp \
    netmask=24 \
    mode=ip \
    port=1194 \
    certificate=ovpn-server \
    require-client-certificate=yes \
    auth=sha1 \
    cipher=aes128-cbc,aes192-cbc,aes256-cbc \
    enabled=yes 
```
### 5、配置防火墙

在防火墙input链中增加一条过滤规则，放行OpenVPN的数据。需要关注protocol选项，取决你使用tcp或者udp模式。
```shell
    /ip firewall filter add chain=input \
    protocol=tcp \
    dst-port=1194 \
    action=accept \
    place-before=0 \
    comment="Allow OpenVPN"
```

### 6、导出CA证书和客户端证书

将第1步签名后的证书导出到文件，`export-passphrase`可以为证书设置密码，为了方便，此处CA证书设置为空表示不需要密码。客户端使用密码，否则后续无法提取密钥key。
```shell
    /certificate export-certificate ovpn-ca export-passphrase=""
    /certificate export-certificate mikrotikax2 export-passphrase=12345678
```
导出的文件在Files菜单中，需要使用Winbox下载到本地电脑。
```shell
    cert_export_mikrotikax2.crt
    cert_export_mikrotikax2.key
    cert_export_ovpn-ca.crt
```
### 7、去除客户端证书密码（可选）

考虑到在客户端作为服务自动运行，启动需要密码不太方便，此处可以去掉密码.

这一部需要使用到Linux或者类Unix系统，使用大部分系统都会自带的openssl进行操作。

对于Windows系统，可以通过终端模拟器来完成，例如Cygwin、GitBash。

    openssl rsa -in cert_export_mikrotikax2.key -out mikrotikax2.key

在出现提示后，输入上一步导出key时设置的密码，即可得到不需要密码的key了。

### 8、编写客户端配置文件

使用如下脚本将证书导入配置文件，客户端证书使用无密码的证书。
```shell
    cat > mikrotikax2.ovpn << EOF
    client
    nobind
    pull
    persist-key
    persist-tun
    dev tun
    proto tcp-client
    remote-cert-tls server
    remote ovpn.simaek.com
    port 1194
    auth SHA1
    auth-user-pass
    auth-nocache
    cipher AES-256-CBC
    #redirect-gateway def1
    resolv-retry infinite
    reneg-sec 0
    verb 3
     
    <ca>
    $(cat cert_export_ovpn-ca.crt)
    </ca>
     
    <cert>
    $(cat cert_export_mikrotikax2.crt)
    </cert>
     
    <key>
    $(cat mikrotikax2.key)
    </key>
    EOF
```
使用此配置文件启动客户端，测试网络连通性，在客户端ping服务端。
```shell
    ping 10.10.10.1
```
在服务端（RouterOS）ping客户端。此时还没有配置固定IP，所以可能会有出入，根据实际客户端获取到的IP来测试。
```shell
    ping 10.10.10.2
```
同时在RouterOS的`/interface`列表中也能看到当前连接的用户。
```shell
    /interface/print
    
    Flags: D - DYNAMIC; X, R - RUNNING
    Columns: NAME, TYPE, ACTUAL-MTU, MAC-ADDRESS
    #    NAME           TYPE     ACTUAL-MTU  MAC-ADDRESS      
    0  R lan1           ether          1500  00:0C:29:34:3C:73
    1  R wan1           ether          1484  2C:F0:5D:D6:BE:E5
    2 DR <ovpn-simaek>  ovpn-in        1360                   
```
### 9、子网间路由

**用户接口绑定**

OpenVPN连接之后，生成的接口名称是动态的，不利于配置。可以在此设置接口绑定，这在配置防火墙、路由规则的时候非常有用。
```shell
    /interface/ovpn-server add name=tun-company user=simaek
```
这会添加添加一个名为company的接口，表示到公司的隧道，绑定到用户simaek的连接上，然后在防火墙等需要配置接口的地方，便可以使用company作为接口进行配置。即使更改了用户，只需要在绑定记录上更新用户名，其他配置都不需要进行变更了。

**服务端子网路由**

配置OpenVPN最佳用途是连接两个子网，RouterOS无法通过cdd那样的方式来给客户端配置静态IP，推送路由信息。但好在RouterOS也是支持固定IP分配的，通过用户名密码配置指定远端（相对于服务端来说就是客户端）的IP地址，以及此用户路由的网段。
```shell
    /ppp secret edit simaek remote-address
    /ppp secret edit simaek routes
```
在出现的交互式文本编辑器中，输入指定的IP，例如：10.10.10.2，以及指定路由的网段，例如：192.168.1.0/24。

默认情况下，当成功建立连接一条OpenVPN隧道时，RouterOS会自动生成动态路由，例如按照上述的配置来说，simaek用户获得的IP时10.10.10.2，查看RouterOS路由表，会有一条`10.10.10.2/32 -> <ovpn-simaek>`的路由，和一条我们指定网段的路由`192.168.1.0/24 -> <ovpn-simaek>`。

当然如果设置了接口绑定，那么此处显示为绑定的接口名称：`10.10.10.2/32 -> <tun-company>`。
```shell
    /ip route print
    
    Flags: D - DYNAMIC; A - ACTIVE; c, s, v, y - COPY
    Columns: DST-ADDRESS, GATEWAY, DISTANCE
    #     DST-ADDRESS      GATEWAY       DISTANCE
    0  As 0.0.0.0/0        192.168.30.1         1
      DAc 10.10.10.2/32    tun-company          0
      DAv 192.168.1.0/24   tun-company          1
      DAc 192.168.30.0/24  wan1                 0
      DAc 192.168.88.0/24  lan1                 0
```
为了便于客户端访问服务端局域网内主机，需要对tun-company出口的数据，以及lan出口的数据进行源地址伪装。
```shell
    /ip firewall nat add chain=srcnat out-interface=tun-company action=masquerade
    /ip firewall nat add chain=srcnat out-interface=lan1 action=masquerade
```
可在客户端OpenVPN实例上ping服务端内网IP，测试连通性。例如：
```shell
    ping 192.168.88.88
```
**客户端子网路由**

由于无法从客户端获取到路由，所以在客户端需要额外做两件事情。以CentOS为例。

1.  将服务端网段（可以是任何需要路由的网段）路由到OpenVPN网关地址。可以在客户端配置文件中写明路由的网段。这样服务启停会自动添加删除路由信息。无需手动配置。可以配置多条路由，另起一行即可。
```shell
    route 192.168.88.0 255.255.255.0
    route 192.168.89.0 255.255.255.0
```
1.  给客户端lan接口以及OpenVPN的tun接口配置源地址伪装，便于访问局域网内主机。以iptables为例。
```shell
    iptables -t nat A POSTROUTING -s 192.168.1.0/24 -o eth0 -j MASQUERADE
    iptables -t nat A POSTROUTING -s 10.10.10.0/24 -o tun0 -j MASQUERADE
    iptables -t nat -nL
    service iptables save
```
由于没有网关访问权限，所以客户端内网如果想要访问服务端内网，需要将客户端内网机器的网关改为部署了OpenVPN的那台机器的地址。

**最终效果**

服务端任意主机上ping通客户端任意主机。

客户端手动配置为OpenVPN客户端IP的机器，可以ping通服务端任意主机。

### 10、结语

RouterOS内置的OpenvpnVPN支持的特性不是很全，一些新特性不支持，不过足够稳定使用了。

后续打算在客户端也运行RouterOS，使用内置的OpenVPN客户端进行连接。