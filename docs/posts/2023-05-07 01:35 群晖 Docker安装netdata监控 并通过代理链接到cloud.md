---
title: 群晖 Docker安装netdata监控 并通过代理链接到cloud
id: 124
date: 2023-05-07 01:35:42
author: admin
cover: https://cdn.jsdelivr.net/gh/makaspacex/PictureZone@main/uPic/zAacAx.png
excerpt: 命令如下： docker run -d --name=netdata \  -p 1999919999 \  -v /etc/passwd/host/etc/passwdro \  -v /etc/group/host/etc/groupro \  -v /proc/host/p
permalink: /archives/%E7%BE%A4%E6%99%96%20Docker%E5%AE%89%E8%A3%85netdata%E7%9B%91%E6%8E%A7%20%E5%B9%B6%E9%80%9A%E8%BF%87%E4%BB%A3%E7%90%86%E9%93%BE%E6%8E%A5%E5%88%B0cloud
categories:
 - linux
 - default
tags: 
 - netdata
---
# 群晖 Docker安装netdata监控 并通过代理链接到cloud
* **命令如下：**

  ```
  docker run -d --name=netdata \
    -p 19999:19999 \
    -v /etc/passwd:/host/etc/passwd:ro \
    -v /etc/group:/host/etc/group:ro \
    -v /proc:/host/proc:ro \
    -v /sys:/host/sys:ro \
    -e NETDATA_CLAIM_TOKEN=X4CO-YRBHZr-4Iw0DJi-F41QEjw_sTKUbI-GYa20FxVXICWUs0VlUEqPoaNLT2aEWLRiHn65JzcwIub8-MLUauFlW77SnOGTRoeSjFdjdCCR0vK7iRUGR9ENsp4e8fb52MQ52k0 \
    -e NETDATA_CLAIM_URL="https://app.netdata.cloud" \
    -e NETDATA_CLAIM_PROXY="http://192.168.49.1:7890" \
    --restart unless-stopped \
    --cap-add SYS_PTRACE \
    --security-opt apparmor=unconfined \
    netdata/netdata
  ```
  **如果不希望链接到cloud，删除** `NETDATA_CLAIM`相关的三个环境变量即可。

  **更加推荐的做法是使用** `docker-compose`

  ```
  version: '3'
  services:
    netdata:
      image: netdata/netdata
      container_name: netdata
      pid: host
      hostname: makanas.lan
      ports:
        - 19999:19999
      restart: unless-stopped
      cap_add:
        - SYS_PTRACE
      security_opt:
        - apparmor:unconfined
      volumes:
        - netdataconfig:/etc/netdata
        - netdatalib:/var/lib/netdata
        - netdatacache:/var/cache/netdata
        - /etc/passwd:/host/etc/passwd:ro
        - /etc/group:/host/etc/group:ro
        - /proc:/host/proc:ro
        - /sys:/host/sys:ro
        - /etc/VERSION:/host/etc/os-release:ro
      environment:
        - PGID=0
        - NETDATA_CLAIM_TOKEN=X4CO-YRBHZr-4Iw0DJi-F41QEjw_sTKUbI-GYa20FxVXICWUs0VlUEqPoaNLT2aEWLRiHn65JzcwIub8-MLUauFlW77SnOGTRoeSjFdjdCCR0vK7iRUGR9ENsp4e8fb52MQ52k0
        - NETDATA_CLAIM_URL=https://app.netdata.cloud
        - NETDATA_CLAIM_PROXY=http://192.168.49.1:7890
  volumes:
    netdataconfig:
    netdatalib:
    netdatacache:
  ```
  **启动命令：**

  ```
  docker-compose -f netdata-docker-compose.yml up -d
  ```
  **以上命令参数顺序不可以变。**
