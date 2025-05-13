---
title: 第二章 pandas基础
lang: zh-CN
hidden: true
date: 2025-05-13 10:30:29
author: datawhalechina
recommend: false
cover: 
tags:
- pandas
---

# 第二章 pandas基础


```python
import numpy as np
import pandas as pd
```

在开始学习前，请保证`pandas`的版本号不低于如下所示的版本，否则请务必升级！请确认已经安装了`xlrd, xlwt, openpyxl`这三个包，其中`xlrd`版本不得高于`2.0.0`。


```python
pd.__version__
```

'1.1.5'

## 一、文件的读取和写入
### 1. 文件读取

`pandas`可以读取的文件格式有很多，这里主要介绍读取`csv, excel, txt`文件。


```python
df_csv = pd.read_csv('../data/my_csv.csv')
df_csv
```


<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>col1</th>
      <th>col2</th>
      <th>col3</th>
      <th>col4</th>
      <th>col5</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>2</td>
      <td>a</td>
      <td>1.4</td>
      <td>apple</td>
      <td>2020/1/1</td>
    </tr>
    <tr>
      <th>1</th>
      <td>3</td>
      <td>b</td>
      <td>3.4</td>
      <td>banana</td>
      <td>2020/1/2</td>
    </tr>
    <tr>
      <th>2</th>
      <td>6</td>
      <td>c</td>
      <td>2.5</td>
      <td>orange</td>
      <td>2020/1/5</td>
    </tr>
    <tr>
      <th>3</th>
      <td>5</td>
      <td>d</td>
      <td>3.2</td>
      <td>lemon</td>
      <td>2020/1/7</td>
    </tr>
  </tbody>
</table>
</div>

```python
df_txt = pd.read_table('../data/my_table.txt')
df_txt
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>col1</th>
      <th>col2</th>
      <th>col3</th>
      <th>col4</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>2</td>
      <td>a</td>
      <td>1.4</td>
      <td>apple 2020/1/1</td>
    </tr>
    <tr>
      <th>1</th>
      <td>3</td>
      <td>b</td>
      <td>3.4</td>
      <td>banana 2020/1/2</td>
    </tr>
    <tr>
      <th>2</th>
      <td>6</td>
      <td>c</td>
      <td>2.5</td>
      <td>orange 2020/1/5</td>
    </tr>
    <tr>
      <th>3</th>
      <td>5</td>
      <td>d</td>
      <td>3.2</td>
      <td>lemon 2020/1/7</td>
    </tr>
  </tbody>
</table>
</div>

```python
df_excel = pd.read_excel('../data/my_excel.xlsx')
df_excel
```
<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>col1</th>
      <th>col2</th>
      <th>col3</th>
      <th>col4</th>
      <th>col5</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>2</td>
      <td>a</td>
      <td>1.4</td>
      <td>apple</td>
      <td>2020/1/1</td>
    </tr>
    <tr>
      <th>1</th>
      <td>3</td>
      <td>b</td>
      <td>3.4</td>
      <td>banana</td>
      <td>2020/1/2</td>
    </tr>
    <tr>
      <th>2</th>
      <td>6</td>
      <td>c</td>
      <td>2.5</td>
      <td>orange</td>
      <td>2020/1/5</td>
    </tr>
    <tr>
      <th>3</th>
      <td>5</td>
      <td>d</td>
      <td>3.2</td>
      <td>lemon</td>
      <td>2020/1/7</td>
    </tr>
  </tbody>
</table>
</div>

这里有一些常用的公共参数，`header=None`表示第一行不作为列名，`index_col`表示把某一列或几列作为索引，索引的内容将会在第三章进行详述，`usecols`表示读取列的集合，默认读取所有的列，`parse_dates`表示需要转化为时间的列，关于时间序列的有关内容将在第十章讲解，`nrows`表示读取的数据行数。上面这些参数在上述的三个函数里都可以使用。

```python
pd.read_table('../data/my_table.txt', header=None)
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>0</th>
      <th>1</th>
      <th>2</th>
      <th>3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>col1</td>
      <td>col2</td>
      <td>col3</td>
      <td>col4</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2</td>
      <td>a</td>
      <td>1.4</td>
      <td>apple 2020/1/1</td>
    </tr>
    <tr>
      <th>2</th>
      <td>3</td>
      <td>b</td>
      <td>3.4</td>
      <td>banana 2020/1/2</td>
    </tr>
    <tr>
      <th>3</th>
      <td>6</td>
      <td>c</td>
      <td>2.5</td>
      <td>orange 2020/1/5</td>
    </tr>
    <tr>
      <th>4</th>
      <td>5</td>
      <td>d</td>
      <td>3.2</td>
      <td>lemon 2020/1/7</td>
    </tr>
  </tbody>
</table>
</div>




```python
pd.read_csv('../data/my_csv.csv', index_col=['col1', 'col2'])
```


<div>

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th></th>
      <th>col3</th>
      <th>col4</th>
      <th>col5</th>
    </tr>
    <tr>
      <th>col1</th>
      <th>col2</th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2</th>
      <th>a</th>
      <td>1.4</td>
      <td>apple</td>
      <td>2020/1/1</td>
    </tr>
    <tr>
      <th>3</th>
      <th>b</th>
      <td>3.4</td>
      <td>banana</td>
      <td>2020/1/2</td>
    </tr>
    <tr>
      <th>6</th>
      <th>c</th>
      <td>2.5</td>
      <td>orange</td>
      <td>2020/1/5</td>
    </tr>
    <tr>
      <th>5</th>
      <th>d</th>
      <td>3.2</td>
      <td>lemon</td>
      <td>2020/1/7</td>
    </tr>
  </tbody>
</table>
</div>




```python
pd.read_table('../data/my_table.txt', usecols=['col1', 'col2'])
```




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>col1</th>
      <th>col2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>2</td>
      <td>a</td>
    </tr>
    <tr>
      <th>1</th>
      <td>3</td>
      <td>b</td>
    </tr>
    <tr>
      <th>2</th>
      <td>6</td>
      <td>c</td>
    </tr>
    <tr>
      <th>3</th>
      <td>5</td>
      <td>d</td>
    </tr>
  </tbody>
</table>
</div>




```python
pd.read_csv('../data/my_csv.csv', parse_dates=['col5'])
```
<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>col1</th>
      <th>col2</th>
      <th>col3</th>
      <th>col4</th>
      <th>col5</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>2</td>
      <td>a</td>
      <td>1.4</td>
      <td>apple</td>
      <td>2020-01-01</td>
    </tr>
    <tr>
      <th>1</th>
      <td>3</td>
      <td>b</td>
      <td>3.4</td>
      <td>banana</td>
      <td>2020-01-02</td>
    </tr>
    <tr>
      <th>2</th>
      <td>6</td>
      <td>c</td>
      <td>2.5</td>
      <td>orange</td>
      <td>2020-01-05</td>
    </tr>
    <tr>
      <th>3</th>
      <td>5</td>
      <td>d</td>
      <td>3.2</td>
      <td>lemon</td>
      <td>2020-01-07</td>
    </tr>
  </tbody>
</table>
</div>




```python
pd.read_excel('../data/my_excel.xlsx', nrows=2)
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>col1</th>
      <th>col2</th>
      <th>col3</th>
      <th>col4</th>
      <th>col5</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>2</td>
      <td>a</td>
      <td>1.4</td>
      <td>apple</td>
      <td>2020/1/1</td>
    </tr>
    <tr>
      <th>1</th>
      <td>3</td>
      <td>b</td>
      <td>3.4</td>
      <td>banana</td>
      <td>2020/1/2</td>
    </tr>
  </tbody>
</table>
</div>



在读取`txt`文件时，经常遇到分隔符非空格的情况，`read_table`有一个分割参数`sep`，它使得用户可以自定义分割符号，进行`txt`数据的读取。例如，下面的读取的表以`||||`为分割：


```python
pd.read_table('../data/my_table_special_sep.txt')
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>col1 |||| col2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>TS |||| This is an apple.</td>
    </tr>
    <tr>
      <th>1</th>
      <td>GQ |||| My name is Bob.</td>
    </tr>
    <tr>
      <th>2</th>
      <td>WT |||| Well done!</td>
    </tr>
    <tr>
      <th>3</th>
      <td>PT |||| May I help you?</td>
    </tr>
  </tbody>
</table>
</div>



上面的结果显然不是理想的，这时可以使用`sep`，同时需要指定引擎为`python`：


```python
pd.read_table('../data/my_table_special_sep.txt', sep=' \|\|\|\| ', engine='python')
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>col1</th>
      <th>col2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>TS</td>
      <td>This is an apple.</td>
    </tr>
    <tr>
      <th>1</th>
      <td>GQ</td>
      <td>My name is Bob.</td>
    </tr>
    <tr>
      <th>2</th>
      <td>WT</td>
      <td>Well done!</td>
    </tr>
    <tr>
      <th>3</th>
      <td>PT</td>
      <td>May I help you?</td>
    </tr>
  </tbody>
</table>
</div>



#### 【WARNING】`sep`是正则参数

在使用`read_table`的时候需要注意，参数`sep`中使用的是正则表达式，因此需要对`|`进行转义变成`\|`，否则无法读取到正确的结果。有关正则表达式的基本内容可以参考第八章或者其他相关资料。

#### 【END】

### 2. 数据写入

一般在数据写入中，最常用的操作是把`index`设置为`False`，特别当索引没有特殊意义的时候，这样的行为能把索引在保存的时候去除。


```python
df_csv.to_csv('../data/my_csv_saved.csv', index=False)
df_excel.to_excel('../data/my_excel_saved.xlsx', index=False)
```

`pandas`中没有定义`to_table`函数，但是`to_csv`可以保存为`txt`文件，并且允许自定义分隔符，常用制表符`\t`分割：


```python
df_txt.to_csv('../data/my_txt_saved.txt', sep='\t', index=False)
```

如果想要把表格快速转换为`markdown`和`latex`语言，可以使用`to_markdown`和`to_latex`函数，此处需要安装`tabulate`包。


```python
print(df_csv.to_markdown())
```

    |    |   col1 | col2   |   col3 | col4   | col5     |
    |---:|-------:|:-------|-------:|:-------|:---------|
    |  0 |      2 | a      |    1.4 | apple  | 2020/1/1 |
    |  1 |      3 | b      |    3.4 | banana | 2020/1/2 |
    |  2 |      6 | c      |    2.5 | orange | 2020/1/5 |
    |  3 |      5 | d      |    3.2 | lemon  | 2020/1/7 |



```python
print(df_csv.to_latex())
```

    \begin{tabular}{lrlrll}
    \toprule
    {} &  col1 & col2 &  col3 &    col4 &      col5 \\
    \midrule
    0 &     2 &    a &   1.4 &   apple &  2020/1/1 \\
    1 &     3 &    b &   3.4 &  banana &  2020/1/2 \\
    2 &     6 &    c &   2.5 &  orange &  2020/1/5 \\
    3 &     5 &    d &   3.2 &   lemon &  2020/1/7 \\
    \bottomrule
    \end{tabular}
    


## 二、基本数据结构
`pandas`中具有两种基本的数据存储结构，存储一维`values`的`Series`和存储二维`values`的`DataFrame`，在这两种结构上定义了很多的属性和方法。

### 1. Series
`Series`一般由四个部分组成，分别是序列的值`data`、索引`index`、存储类型`dtype`、序列的名字`name`。其中，索引也可以指定它的名字，默认为空。


```python
s = pd.Series(data = [100, 'a', {'dic1':5}],
              index = pd.Index(['id1', 20, 'third'], name='my_idx'),
              dtype = 'object',
              name = 'my_name')
s
```




    my_idx
    id1              100
    20                 a
    third    {'dic1': 5}
    Name: my_name, dtype: object



#### 【NOTE】`object`类型

`object`代表了一种混合类型，正如上面的例子中存储了整数、字符串以及`Python`的字典数据结构。此外，目前`pandas`把纯字符串序列也默认认为是一种`object`类型的序列，但它也可以用`string`类型存储，文本序列的内容会在第八章中讨论。

#### 【END】

对于这些属性，可以通过 . 的方式来获取：


```python
s.values
```


    array([100, 'a', {'dic1': 5}], dtype=object)


```python
s.index
```


    Index(['id1', 20, 'third'], dtype='object', name='my_idx')


```python
s.dtype
```




    dtype('O')




```python
s.name
```




    'my_name'



利用`.shape`可以获取序列的长度：


```python
s.shape
```


    (3,)


索引是`pandas`中最重要的概念之一，它将在第三章中被详细地讨论。如果想要取出单个索引对应的值，可以通过`[index_item]`可以取出。

### 2. DataFrame
`DataFrame`在`Series`的基础上增加了列索引，一个数据框可以由二维的`data`与行列索引来构造：


```python
data = [[1, 'a', 1.2], [2, 'b', 2.2], [3, 'c', 3.2]]
df = pd.DataFrame(data = data,
                  index = ['row_%d'%i for i in range(3)],
                  columns=['col_0', 'col_1', 'col_2'])
df
```




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>col_0</th>
      <th>col_1</th>
      <th>col_2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>row_0</th>
      <td>1</td>
      <td>a</td>
      <td>1.2</td>
    </tr>
    <tr>
      <th>row_1</th>
      <td>2</td>
      <td>b</td>
      <td>2.2</td>
    </tr>
    <tr>
      <th>row_2</th>
      <td>3</td>
      <td>c</td>
      <td>3.2</td>
    </tr>
  </tbody>
</table>
</div>



但一般而言，更多的时候会采用从列索引名到数据的映射来构造数据框，同时再加上行索引：


```python
df = pd.DataFrame(data = {'col_0': [1,2,3],
                          'col_1':list('abc'),
                          'col_2': [1.2, 2.2, 3.2]},
                  index = ['row_%d'%i for i in range(3)])
df
```




<div>

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>col_0</th>
      <th>col_1</th>
      <th>col_2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>row_0</th>
      <td>1</td>
      <td>a</td>
      <td>1.2</td>
    </tr>
    <tr>
      <th>row_1</th>
      <td>2</td>
      <td>b</td>
      <td>2.2</td>
    </tr>
    <tr>
      <th>row_2</th>
      <td>3</td>
      <td>c</td>
      <td>3.2</td>
    </tr>
  </tbody>
</table>
</div>



由于这种映射关系，在`DataFrame`中可以用`[col_name]`与`[col_list]`来取出相应的列与由多个列组成的表，结果分别为`Series`和`DataFrame`：


```python
df['col_0']
```




    row_0    1
    row_1    2
    row_2    3
    Name: col_0, dtype: int64




```python
df[['col_0', 'col_1']]
```




<div>

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>col_0</th>
      <th>col_1</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>row_0</th>
      <td>1</td>
      <td>a</td>
    </tr>
    <tr>
      <th>row_1</th>
      <td>2</td>
      <td>b</td>
    </tr>
    <tr>
      <th>row_2</th>
      <td>3</td>
      <td>c</td>
    </tr>
  </tbody>
</table>
</div>



与`Series`类似，在数据框中同样可以取出相应的属性：


```python
df.values
```




    array([[1, 'a', 1.2],
           [2, 'b', 2.2],
           [3, 'c', 3.2]], dtype=object)




```python
df.index
```




    Index(['row_0', 'row_1', 'row_2'], dtype='object')




```python
df.columns
```




    Index(['col_0', 'col_1', 'col_2'], dtype='object')




```python
df.dtypes # 返回的是值为相应列数据类型的Series
```




    col_0      int64
    col_1     object
    col_2    float64
    dtype: object




```python
df.shape
```




    (3, 3)



通过`.T`可以把`DataFrame`进行转置：


```python
df.T
```




<div>

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>row_0</th>
      <th>row_1</th>
      <th>row_2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>col_0</th>
      <td>1</td>
      <td>2</td>
      <td>3</td>
    </tr>
    <tr>
      <th>col_1</th>
      <td>a</td>
      <td>b</td>
      <td>c</td>
    </tr>
    <tr>
      <th>col_2</th>
      <td>1.2</td>
      <td>2.2</td>
      <td>3.2</td>
    </tr>
  </tbody>
</table>
</div>



## 三、常用基本函数
为了进行举例说明，在接下来的部分和其余章节都将会使用一份`learn_pandas.csv`的虚拟数据集，它记录了四所学校学生的体测个人信息。


```python
df = pd.read_csv('../data/learn_pandas.csv')
df.columns
```




    Index(['School', 'Grade', 'Name', 'Gender', 'Height', 'Weight', 'Transfer',
           'Test_Number', 'Test_Date', 'Time_Record'],
          dtype='object')



上述列名依次代表学校、年级、姓名、性别、身高、体重、是否为转系生、体测场次、测试时间、1000米成绩，本章只需使用其中的前七列。


```python
df = df[df.columns[:7]]
```

### 1. 汇总函数
`head, tail`函数分别表示返回表或者序列的前`n`行和后`n`行，其中`n`默认为5：


```python
df.head(2)
```




<div>

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>School</th>
      <th>Grade</th>
      <th>Name</th>
      <th>Gender</th>
      <th>Height</th>
      <th>Weight</th>
      <th>Transfer</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Shanghai Jiao Tong University</td>
      <td>Freshman</td>
      <td>Gaopeng Yang</td>
      <td>Female</td>
      <td>158.9</td>
      <td>46.0</td>
      <td>N</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Peking University</td>
      <td>Freshman</td>
      <td>Changqiang You</td>
      <td>Male</td>
      <td>166.5</td>
      <td>70.0</td>
      <td>N</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.tail(3)
```




<div>

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>School</th>
      <th>Grade</th>
      <th>Name</th>
      <th>Gender</th>
      <th>Height</th>
      <th>Weight</th>
      <th>Transfer</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>197</th>
      <td>Shanghai Jiao Tong University</td>
      <td>Senior</td>
      <td>Chengqiang Chu</td>
      <td>Female</td>
      <td>153.9</td>
      <td>45.0</td>
      <td>N</td>
    </tr>
    <tr>
      <th>198</th>
      <td>Shanghai Jiao Tong University</td>
      <td>Senior</td>
      <td>Chengmei Shen</td>
      <td>Male</td>
      <td>175.3</td>
      <td>71.0</td>
      <td>N</td>
    </tr>
    <tr>
      <th>199</th>
      <td>Tsinghua University</td>
      <td>Sophomore</td>
      <td>Chunpeng Lv</td>
      <td>Male</td>
      <td>155.7</td>
      <td>51.0</td>
      <td>N</td>
    </tr>
  </tbody>
</table>
</div>



`info, describe`分别返回表的信息概况和表中数值列对应的主要统计量 ：


```python
df.info()
```

    <class 'pandas.core.frame.DataFrame'>
    RangeIndex: 200 entries, 0 to 199
    Data columns (total 7 columns):
     #   Column    Non-Null Count  Dtype  
    ---  ------    --------------  -----  
     0   School    200 non-null    object 
     1   Grade     200 non-null    object 
     2   Name      200 non-null    object 
     3   Gender    200 non-null    object 
     4   Height    183 non-null    float64
     5   Weight    189 non-null    float64
     6   Transfer  188 non-null    object 
    dtypes: float64(2), object(5)
    memory usage: 11.1+ KB



```python
df.describe()
```




<div>

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Height</th>
      <th>Weight</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>count</th>
      <td>183.000000</td>
      <td>189.000000</td>
    </tr>
    <tr>
      <th>mean</th>
      <td>163.218033</td>
      <td>55.015873</td>
    </tr>
    <tr>
      <th>std</th>
      <td>8.608879</td>
      <td>12.824294</td>
    </tr>
    <tr>
      <th>min</th>
      <td>145.400000</td>
      <td>34.000000</td>
    </tr>
    <tr>
      <th>25%</th>
      <td>157.150000</td>
      <td>46.000000</td>
    </tr>
    <tr>
      <th>50%</th>
      <td>161.900000</td>
      <td>51.000000</td>
    </tr>
    <tr>
      <th>75%</th>
      <td>167.500000</td>
      <td>65.000000</td>
    </tr>
    <tr>
      <th>max</th>
      <td>193.900000</td>
      <td>89.000000</td>
    </tr>
  </tbody>
</table>
</div>



#### 【NOTE】更全面的数据汇总

`info, describe`只能实现较少信息的展示，如果想要对一份数据集进行全面且有效的观察，特别是在列较多的情况下，推荐使用[pandas-profiling](https://pandas-profiling.github.io/pandas-profiling/docs/)包，它将在第十一章被再次提到。

#### 【END】

### 2. 特征统计函数
在`Series`和`DataFrame`上定义了许多统计函数，最常见的是`sum, mean, median, var, std, max, min`。例如，选出身高和体重列进行演示：


```python
df_demo = df[['Height', 'Weight']]
df_demo.mean()
```




    Height    163.218033
    Weight     55.015873
    dtype: float64




```python
df_demo.max()
```




    Height    193.9
    Weight     89.0
    dtype: float64



此外，需要介绍的是`quantile, count, idxmax`这三个函数，它们分别返回的是分位数、非缺失值个数、最大值对应的索引：


```python
df_demo.quantile(0.75)
```




    Height    167.5
    Weight     65.0
    Name: 0.75, dtype: float64




```python
df_demo.count()
```




    Height    183
    Weight    189
    dtype: int64




```python
df_demo.idxmax() # idxmin是对应的函数
```




    Height    193
    Weight      2
    dtype: int64



上面这些所有的函数，由于操作后返回的是标量，所以又称为聚合函数，它们有一个公共参数`axis`，默认为0代表逐列聚合，如果设置为1则表示逐行聚合：


```python
df_demo.mean(axis=1).head() # 在这个数据集上体重和身高的均值并没有意义
```




    0    102.45
    1    118.25
    2    138.95
    3     41.00
    4    124.00
    dtype: float64



### 3. 唯一值函数
对序列使用`unique`和`nunique`可以分别得到其唯一值组成的列表和唯一值的个数：


```python
df['School'].unique()
```




    array(['Shanghai Jiao Tong University', 'Peking University',
           'Fudan University', 'Tsinghua University'], dtype=object)




```python
df['School'].nunique()
```




    4



`value_counts`可以得到唯一值和其对应出现的频数：


```python
df['School'].value_counts()
```




    Tsinghua University              69
    Shanghai Jiao Tong University    57
    Fudan University                 40
    Peking University                34
    Name: School, dtype: int64



如果想要观察多个列组合的唯一值，可以使用`drop_duplicates`。其中的关键参数是`keep`，默认值`first`表示每个组合保留第一次出现的所在行，`last`表示保留最后一次出现的所在行，`False`表示把所有重复组合所在的行剔除。


```python
df_demo = df[['Gender','Transfer','Name']]
df_demo.drop_duplicates(['Gender', 'Transfer'])
```




<div>

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Gender</th>
      <th>Transfer</th>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Female</td>
      <td>N</td>
      <td>Gaopeng Yang</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Male</td>
      <td>N</td>
      <td>Changqiang You</td>
    </tr>
    <tr>
      <th>12</th>
      <td>Female</td>
      <td>NaN</td>
      <td>Peng You</td>
    </tr>
    <tr>
      <th>21</th>
      <td>Male</td>
      <td>NaN</td>
      <td>Xiaopeng Shen</td>
    </tr>
    <tr>
      <th>36</th>
      <td>Male</td>
      <td>Y</td>
      <td>Xiaojuan Qin</td>
    </tr>
    <tr>
      <th>43</th>
      <td>Female</td>
      <td>Y</td>
      <td>Gaoli Feng</td>
    </tr>
  </tbody>
</table>
</div>




```python
df_demo.drop_duplicates(['Gender', 'Transfer'], keep='last')
```




<div>

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Gender</th>
      <th>Transfer</th>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>147</th>
      <td>Male</td>
      <td>NaN</td>
      <td>Juan You</td>
    </tr>
    <tr>
      <th>150</th>
      <td>Male</td>
      <td>Y</td>
      <td>Chengpeng You</td>
    </tr>
    <tr>
      <th>169</th>
      <td>Female</td>
      <td>Y</td>
      <td>Chengquan Qin</td>
    </tr>
    <tr>
      <th>194</th>
      <td>Female</td>
      <td>NaN</td>
      <td>Yanmei Qian</td>
    </tr>
    <tr>
      <th>197</th>
      <td>Female</td>
      <td>N</td>
      <td>Chengqiang Chu</td>
    </tr>
    <tr>
      <th>199</th>
      <td>Male</td>
      <td>N</td>
      <td>Chunpeng Lv</td>
    </tr>
  </tbody>
</table>
</div>




```python
df_demo.drop_duplicates(['Name', 'Gender'], keep=False).head() # 保留只出现过一次的性别和姓名组合
```




<div>

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Gender</th>
      <th>Transfer</th>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Female</td>
      <td>N</td>
      <td>Gaopeng Yang</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Male</td>
      <td>N</td>
      <td>Changqiang You</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Male</td>
      <td>N</td>
      <td>Mei Sun</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Male</td>
      <td>N</td>
      <td>Gaojuan You</td>
    </tr>
    <tr>
      <th>5</th>
      <td>Female</td>
      <td>N</td>
      <td>Xiaoli Qian</td>
    </tr>
  </tbody>
</table>
</div>




```python
df['School'].drop_duplicates() # 在Series上也可以使用
```




    0    Shanghai Jiao Tong University
    1                Peking University
    3                 Fudan University
    5              Tsinghua University
    Name: School, dtype: object



此外，`duplicated`和`drop_duplicates`的功能类似，但前者返回了是否为唯一值的布尔列表，其`keep`参数与后者一致。其返回的序列，把重复元素设为`True`，否则为`False`。 `drop_duplicates`等价于把`duplicated`为`True`的对应行剔除。


```python
df_demo.duplicated(['Gender', 'Transfer']).head()
```




    0    False
    1    False
    2     True
    3     True
    4     True
    dtype: bool




```python
df['School'].duplicated().head() # 在Series上也可以使用
```




    0    False
    1    False
    2     True
    3    False
    4     True
    Name: School, dtype: bool



### 4. 替换函数
一般而言，替换操作是针对某一个列进行的，因此下面的例子都以`Series`举例。`pandas`中的替换函数可以归纳为三类：映射替换、逻辑替换、数值替换。其中映射替换包含`replace`方法、第八章中的`str.replace`方法以及第九章中的`cat.codes`方法，此处介绍`replace`的用法。

在`replace`中，可以通过字典构造，或者传入两个列表来进行替换：


```python
df['Gender'].replace({'Female':0, 'Male':1}).head()
```




    0    0
    1    1
    2    1
    3    0
    4    1
    Name: Gender, dtype: int64




```python
df['Gender'].replace(['Female', 'Male'], [0, 1]).head()
```




    0    0
    1    1
    2    1
    3    0
    4    1
    Name: Gender, dtype: int64



另外，`replace`还有一种特殊的方向替换，指定`method`参数为`ffill`则为用前面一个最近的未被替换的值进行替换，`bfill`则使用后面最近的未被替换的值进行替换。从下面的例子可以看到，它们的结果是不同的：


```python
s = pd.Series(['a', 1, 'b', 2, 1, 1, 'a'])
s.replace([1, 2], method='ffill')
```




    0    a
    1    a
    2    b
    3    b
    4    b
    5    b
    6    a
    dtype: object




```python
s.replace([1, 2], method='bfill')
```




    0    a
    1    b
    2    b
    3    a
    4    a
    5    a
    6    a
    dtype: object



#### 【WARNING】正则替换请使用`str.replace`

虽然对于`replace`而言可以使用正则替换，但是当前版本下对于`string`类型的正则替换还存在`bug`，因此如有此需求，请选择`str.replace`进行替换操作，具体的方式将在第八章中讲解。

#### 【END】

逻辑替换包括了`where`和`mask`，这两个函数是完全对称的：`where`函数在传入条件为`False`的对应行进行替换，而`mask`在传入条件为`True`的对应行进行替换，当不指定替换值时，替换为缺失值。


```python
s = pd.Series([-1, 1.2345, 100, -50])
s.where(s<0)
```




    0    -1.0
    1     NaN
    2     NaN
    3   -50.0
    dtype: float64




```python
s.where(s<0, 100)
```




    0     -1.0
    1    100.0
    2    100.0
    3    -50.0
    dtype: float64




```python
s.mask(s<0)
```




    0         NaN
    1      1.2345
    2    100.0000
    3         NaN
    dtype: float64




```python
s.mask(s<0, -50)
```




    0    -50.0000
    1      1.2345
    2    100.0000
    3    -50.0000
    dtype: float64



需要注意的是，传入的条件只需是与被调用的`Series`索引一致的布尔序列即可：


```python
s_condition= pd.Series([True,False,False,True],index=s.index)
s.mask(s_condition, -50)
```




    0    -50.0000
    1      1.2345
    2    100.0000
    3    -50.0000
    dtype: float64



数值替换包含了`round, abs, clip`方法，它们分别表示按照给定精度四舍五入、取绝对值和截断：


```python
s = pd.Series([-1, 1.2345, 100, -50])
s.round(2)
```




    0     -1.00
    1      1.23
    2    100.00
    3    -50.00
    dtype: float64




```python
s.abs()
```




    0      1.0000
    1      1.2345
    2    100.0000
    3     50.0000
    dtype: float64




```python
s.clip(0, 2) # 前两个数分别表示上下截断边界
```




    0    0.0000
    1    1.2345
    2    2.0000
    3    0.0000
    dtype: float64



#### 【练一练】

在 clip 中，超过边界的只能截断为边界值，如果要把超出边界的替换为自定义的值，应当如何做？

#### 【END】

### 5. 排序函数
排序共有两种方式，其一为值排序，其二为索引排序，对应的函数是`sort_values`和`sort_index`。

为了演示排序函数，下面先利用`set_index`方法把年级和姓名两列作为索引，多级索引的内容和索引设置的方法将在第三章进行详细讲解。


```python
df_demo = df[['Grade', 'Name', 'Height', 'Weight']].set_index(['Grade','Name'])
df_demo.head(3)
```




<div>

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th></th>
      <th>Height</th>
      <th>Weight</th>
    </tr>
    <tr>
      <th>Grade</th>
      <th>Name</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="2" valign="top">Freshman</th>
      <th>Gaopeng Yang</th>
      <td>158.9</td>
      <td>46.0</td>
    </tr>
    <tr>
      <th>Changqiang You</th>
      <td>166.5</td>
      <td>70.0</td>
    </tr>
    <tr>
      <th>Senior</th>
      <th>Mei Sun</th>
      <td>188.9</td>
      <td>89.0</td>
    </tr>
  </tbody>
</table>
</div>



对身高进行排序，默认参数`ascending=True`为升序：


```python
df_demo.sort_values('Height').head()
```




<div>

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th></th>
      <th>Height</th>
      <th>Weight</th>
    </tr>
    <tr>
      <th>Grade</th>
      <th>Name</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Junior</th>
      <th>Xiaoli Chu</th>
      <td>145.4</td>
      <td>34.0</td>
    </tr>
    <tr>
      <th>Senior</th>
      <th>Gaomei Lv</th>
      <td>147.3</td>
      <td>34.0</td>
    </tr>
    <tr>
      <th>Sophomore</th>
      <th>Peng Han</th>
      <td>147.8</td>
      <td>34.0</td>
    </tr>
    <tr>
      <th>Senior</th>
      <th>Changli Lv</th>
      <td>148.7</td>
      <td>41.0</td>
    </tr>
    <tr>
      <th>Sophomore</th>
      <th>Changjuan You</th>
      <td>150.5</td>
      <td>40.0</td>
    </tr>
  </tbody>
</table>
</div>




```python
df_demo.sort_values('Height', ascending=False).head()
```




<div>

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th></th>
      <th>Height</th>
      <th>Weight</th>
    </tr>
    <tr>
      <th>Grade</th>
      <th>Name</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="3" valign="top">Senior</th>
      <th>Xiaoqiang Qin</th>
      <td>193.9</td>
      <td>79.0</td>
    </tr>
    <tr>
      <th>Mei Sun</th>
      <td>188.9</td>
      <td>89.0</td>
    </tr>
    <tr>
      <th>Gaoli Zhao</th>
      <td>186.5</td>
      <td>83.0</td>
    </tr>
    <tr>
      <th>Freshman</th>
      <th>Qiang Han</th>
      <td>185.3</td>
      <td>87.0</td>
    </tr>
    <tr>
      <th>Senior</th>
      <th>Qiang Zheng</th>
      <td>183.9</td>
      <td>87.0</td>
    </tr>
  </tbody>
</table>
</div>



在排序中，经常遇到多列排序的问题，比如在体重相同的情况下，对身高进行排序，并且保持身高降序排列，体重升序排列：


```python
df_demo.sort_values(['Weight','Height'],ascending=[True,False]).head()
```




<div>

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th></th>
      <th>Height</th>
      <th>Weight</th>
    </tr>
    <tr>
      <th>Grade</th>
      <th>Name</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Sophomore</th>
      <th>Peng Han</th>
      <td>147.8</td>
      <td>34.0</td>
    </tr>
    <tr>
      <th>Senior</th>
      <th>Gaomei Lv</th>
      <td>147.3</td>
      <td>34.0</td>
    </tr>
    <tr>
      <th>Junior</th>
      <th>Xiaoli Chu</th>
      <td>145.4</td>
      <td>34.0</td>
    </tr>
    <tr>
      <th>Sophomore</th>
      <th>Qiang Zhou</th>
      <td>150.5</td>
      <td>36.0</td>
    </tr>
    <tr>
      <th>Freshman</th>
      <th>Yanqiang Xu</th>
      <td>152.4</td>
      <td>38.0</td>
    </tr>
  </tbody>
</table>
</div>



索引排序的用法和值排序完全一致，只不过元素的值在索引中，此时需要指定索引层的名字或者层号，用参数`level`表示。另外，需要注意的是字符串的排列顺序由字母顺序决定。


```python
df_demo.sort_index(level=['Grade','Name'],ascending=[True,False]).head()
```




<div>

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th></th>
      <th>Height</th>
      <th>Weight</th>
    </tr>
    <tr>
      <th>Grade</th>
      <th>Name</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="5" valign="top">Freshman</th>
      <th>Yanquan Wang</th>
      <td>163.5</td>
      <td>55.0</td>
    </tr>
    <tr>
      <th>Yanqiang Xu</th>
      <td>152.4</td>
      <td>38.0</td>
    </tr>
    <tr>
      <th>Yanqiang Feng</th>
      <td>162.3</td>
      <td>51.0</td>
    </tr>
    <tr>
      <th>Yanpeng Lv</th>
      <td>NaN</td>
      <td>65.0</td>
    </tr>
    <tr>
      <th>Yanli Zhang</th>
      <td>165.1</td>
      <td>52.0</td>
    </tr>
  </tbody>
</table>
</div>



### 6. apply方法
`apply`方法常用于`DataFrame`的行迭代或者列迭代，它的`axis`含义与第2小节中的统计聚合函数一致，`apply`的参数往往是一个以序列为输入的函数。例如对于`.mean()`，使用`apply`可以如下地写出：


```python
df_demo = df[['Height', 'Weight']]
def my_mean(x):
     res = x.mean()
     return res
df_demo.apply(my_mean)
```




    Height    163.218033
    Weight     55.015873
    dtype: float64



同样的，可以利用`lambda`表达式使得书写简洁，这里的`x`就指代被调用的`df_demo`表中逐个输入的序列：


```python
df_demo.apply(lambda x:x.mean())
```




    Height    163.218033
    Weight     55.015873
    dtype: float64



若指定`axis=1`，那么每次传入函数的就是行元素组成的`Series`，其结果与之前的逐行均值结果一致。


```python
df_demo.apply(lambda x:x.mean(), axis=1).head()
```




    0    102.45
    1    118.25
    2    138.95
    3     41.00
    4    124.00
    dtype: float64



这里再举一个例子：`mad`函数返回的是一个序列中偏离该序列均值的绝对值大小的均值，例如序列1,3,7,10中，均值为5.25，每一个元素偏离的绝对值为4.25,2.25,1.75,4.75，这个偏离序列的均值为3.25。现在利用`apply`计算升高和体重的`mad`指标：


```python
df_demo.apply(lambda x:(x-x.mean()).abs().mean())
```




    Height     6.707229
    Weight    10.391870
    dtype: float64



这与使用内置的`mad`函数计算结果一致：


```python
df_demo.mad()
```




    Height     6.707229
    Weight    10.391870
    dtype: float64



#### 【WARNING】谨慎使用`apply`

得益于传入自定义函数的处理，`apply`的自由度很高，但这是以性能为代价的。一般而言，使用`pandas`的内置函数处理和`apply`来处理同一个任务，其速度会相差较多，因此只有在确实存在自定义需求的情境下才考虑使用`apply`。

#### 【END】

## 四、窗口对象
`pandas`中有3类窗口，分别是滑动窗口`rolling`、扩张窗口`expanding`以及指数加权窗口`ewm`。需要说明的是，以日期偏置为窗口大小的滑动窗口将在第十章讨论，指数加权窗口见本章练习。

### 1. 滑窗对象
要使用滑窗函数，就必须先要对一个序列使用`.rolling`得到滑窗对象，其最重要的参数为窗口大小`window`。


```python
s = pd.Series([1,2,3,4,5])
roller = s.rolling(window = 3)
roller
```




    Rolling [window=3,center=False,axis=0]



在得到了滑窗对象后，能够使用相应的聚合函数进行计算，需要注意的是窗口包含当前行所在的元素，例如在第四个位置进行均值运算时，应当计算(2+3+4)/3，而不是(1+2+3)/3：


```python
roller.mean()
```




    0    NaN
    1    NaN
    2    2.0
    3    3.0
    4    4.0
    dtype: float64




```python
roller.sum()
```




    0     NaN
    1     NaN
    2     6.0
    3     9.0
    4    12.0
    dtype: float64



对于滑动相关系数或滑动协方差的计算，可以如下写出：


```python
s2 = pd.Series([1,2,6,16,30])
roller.cov(s2)
```




    0     NaN
    1     NaN
    2     2.5
    3     7.0
    4    12.0
    dtype: float64




```python
roller.corr(s2)
```




    0         NaN
    1         NaN
    2    0.944911
    3    0.970725
    4    0.995402
    dtype: float64



此外，还支持使用`apply`传入自定义函数，其传入值是对应窗口的`Series`，例如上述的均值函数可以等效表示：


```python
roller.apply(lambda x:x.mean())
```




    0    NaN
    1    NaN
    2    2.0
    3    3.0
    4    4.0
    dtype: float64



`shift, diff, pct_change`是一组类滑窗函数，它们的公共参数为`periods=n`，默认为1，分别表示取向前第`n`个元素的值、与向前第`n`个元素做差（与`Numpy`中不同，后者表示`n`阶差分）、与向前第`n`个元素相比计算增长率。这里的`n`可以为负，表示反方向的类似操作。


```python
s = pd.Series([1,3,6,10,15])
s.shift(2)
```




    0    NaN
    1    NaN
    2    1.0
    3    3.0
    4    6.0
    dtype: float64




```python
s.diff(3)
```




    0     NaN
    1     NaN
    2     NaN
    3     9.0
    4    12.0
    dtype: float64




```python
s.pct_change()
```




    0         NaN
    1    2.000000
    2    1.000000
    3    0.666667
    4    0.500000
    dtype: float64




```python
s.shift(-1)
```




    0     3.0
    1     6.0
    2    10.0
    3    15.0
    4     NaN
    dtype: float64




```python
s.diff(-2)
```




    0   -5.0
    1   -7.0
    2   -9.0
    3    NaN
    4    NaN
    dtype: float64



将其视作类滑窗函数的原因是，它们的功能可以用窗口大小为`n+1`的`rolling`方法等价代替：


```python
s.rolling(3).apply(lambda x:list(x)[0]) # s.shift(2)
```




    0    NaN
    1    NaN
    2    1.0
    3    3.0
    4    6.0
    dtype: float64




```python
 s.rolling(4).apply(lambda x:list(x)[-1]-list(x)[0]) # s.diff(3)
```




    0     NaN
    1     NaN
    2     NaN
    3     9.0
    4    12.0
    dtype: float64




```python
def my_pct(x):
     L = list(x)
     return L[-1]/L[0]-1
s.rolling(2).apply(my_pct) # s.pct_change()
```




    0         NaN
    1    2.000000
    2    1.000000
    3    0.666667
    4    0.500000
    dtype: float64



#### 【练一练】

`rolling`对象的默认窗口方向都是向前的，某些情况下用户需要向后的窗口，例如对1,2,3设定向后窗口为2的`sum`操作，结果为3,5,NaN，此时应该如何实现向后的滑窗操作？

#### 【END】

### 2. 扩张窗口
扩张窗口又称累计窗口，可以理解为一个动态长度的窗口，其窗口的大小就是从序列开始处到具体操作的对应位置，其使用的聚合函数会作用于这些逐步扩张的窗口上。具体地说，设序列为a1, a2, a3, a4，则其每个位置对应的窗口即\[a1\]、\[a1, a2\]、\[a1, a2, a3\]、\[a1, a2, a3, a4\]。


```python
s = pd.Series([1, 3, 6, 10])
s.expanding().mean()
```




    0    1.000000
    1    2.000000
    2    3.333333
    3    5.000000
    dtype: float64



#### 【练一练】

`cummax, cumsum, cumprod`函数是典型的类扩张窗口函数，请使用`expanding`对象依次实现它们。

#### 【END】

## 五、练习
### Ex1：口袋妖怪数据集
现有一份口袋妖怪的数据集，下面进行一些背景说明：

* `#`代表全国图鉴编号，不同行存在相同数字则表示为该妖怪的不同状态

* 妖怪具有单属性和双属性两种，对于单属性的妖怪，`Type 2`为缺失值
* `Total, HP, Attack, Defense, Sp. Atk, Sp. Def, Speed`分别代表种族值、体力、物攻、防御、特攻、特防、速度，其中种族值为后6项之和


```python
df = pd.read_csv('../data/pokemon.csv')
df.head(3)
```




<div>

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>#</th>
      <th>Name</th>
      <th>Type 1</th>
      <th>Type 2</th>
      <th>Total</th>
      <th>HP</th>
      <th>Attack</th>
      <th>Defense</th>
      <th>Sp. Atk</th>
      <th>Sp. Def</th>
      <th>Speed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>Bulbasaur</td>
      <td>Grass</td>
      <td>Poison</td>
      <td>318</td>
      <td>45</td>
      <td>49</td>
      <td>49</td>
      <td>65</td>
      <td>65</td>
      <td>45</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2</td>
      <td>Ivysaur</td>
      <td>Grass</td>
      <td>Poison</td>
      <td>405</td>
      <td>60</td>
      <td>62</td>
      <td>63</td>
      <td>80</td>
      <td>80</td>
      <td>60</td>
    </tr>
    <tr>
      <th>2</th>
      <td>3</td>
      <td>Venusaur</td>
      <td>Grass</td>
      <td>Poison</td>
      <td>525</td>
      <td>80</td>
      <td>82</td>
      <td>83</td>
      <td>100</td>
      <td>100</td>
      <td>80</td>
    </tr>
  </tbody>
</table>
</div>



1. 对`HP, Attack, Defense, Sp. Atk, Sp. Def, Speed`进行加总，验证是否为`Total`值。

2. 对于`#`重复的妖怪只保留第一条记录，解决以下问题：

* 求第一属性的种类数量和前三多数量对应的种类
* 求第一属性和第二属性的组合种类
* 求尚未出现过的属性组合

3. 按照下述要求，构造`Series`：

* 取出物攻，超过120的替换为`high`，不足50的替换为`low`，否则设为`mid`
* 取出第一属性，分别用`replace`和`apply`替换所有字母为大写
* 求每个妖怪六项能力的离差，即所有能力中偏离中位数最大的值，添加到`df`并从大到小排序

### Ex2：指数加权窗口
1. 作为扩张窗口的`ewm`窗口

在扩张窗口中，用户可以使用各类函数进行历史的累计指标统计，但这些内置的统计函数往往把窗口中的所有元素赋予了同样的权重。事实上，可以给出不同的权重来赋给窗口中的元素，指数加权窗口就是这样一种特殊的扩张窗口。

其中，最重要的参数是`alpha`，它决定了默认情况下的窗口权重为$w_i=(1−\alpha)^i,i\in\{0,1,...,t\}$，其中$i=t$表示当前元素，$i=0$表示序列的第一个元素。

从权重公式可以看出，离开当前值越远则权重越小，若记原序列为$x$，更新后的当前元素为$y_t$，此时通过加权公式归一化后可知：

$$
\begin{split}y_t &=\frac{\sum_{i=0}^{t} w_i x_{t-i}}{\sum_{i=0}^{t} w_i} \\
&=\frac{x_t + (1 - \alpha)x_{t-1} + (1 - \alpha)^2 x_{t-2} + ...
+ (1 - \alpha)^{t} x_{0}}{1 + (1 - \alpha) + (1 - \alpha)^2 + ...
+ (1 - \alpha)^{t}}\\\end{split}
$$

对于`Series`而言，可以用`ewm`对象如下计算指数平滑后的序列：


```python
np.random.seed(0)
s = pd.Series(np.random.randint(-1,2,30).cumsum())
s.head()
```




    0   -1
    1   -1
    2   -2
    3   -2
    4   -2
    dtype: int32




```python
s.ewm(alpha=0.2).mean().head()
```




    0   -1.000000
    1   -1.000000
    2   -1.409836
    3   -1.609756
    4   -1.725845
    dtype: float64



请用`expanding`窗口实现。

2. 作为滑动窗口的`ewm`窗口

从第1问中可以看到，`ewm`作为一种扩张窗口的特例，只能从序列的第一个元素开始加权。现在希望给定一个限制窗口`n`，只对包含自身的最近的`n`个元素作为窗口进行滑动加权平滑。请根据滑窗函数，给出新的`wi`与`yt`的更新公式，并通过`rolling`窗口实现这一功能。
