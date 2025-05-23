---
title: 变量说明符
lang: zh-CN
date: 2025-03-31 23:56:56
author: 阮一峰
cover: 
tags:
hidden: true
recommend: false
---

# 变量说明符

C 语言允许声明变量的时候，加上一些特定的说明符（specifier），为编译器提供变量行为的额外信息。它的主要作用是帮助编译器优化代码，有时会对程序行为产生影响。

## const

`const`说明符表示变量是只读的，不得被修改。

```c
const double PI = 3.14159;
PI = 3; // 报错
```

上面示例里面的`const`，表示变量`PI`的值不应改变。如果改变的话，编译器会报错。

对于数组，`const`表示数组成员不能修改。

```c
const int arr[] = {1, 2, 3, 4};
arr[0] = 5; // 报错
```

上面示例中，`const`使得数组`arr`的成员无法修改。

对于指针变量，`const`有两种写法，含义是不一样的。如果`const`在`*`前面，表示指针指向的值不可修改。

```c
// const 表示指向的值 *x 不能修改
int const * x
// 或者
const int * x
```

下面示例中，对`x`指向的值进行修改导致报错。

```c
int p = 1
const int* x = &p;

(*x)++; // 报错
```

如果`const`在`*`后面，表示指针包含的地址不可修改。

```c
// const 表示地址 x 不能修改
int* const x
```

下面示例中，对`x`进行修改导致报错。

```c
int p = 1
int* const x = &p;

x++; // 报错
```

这两者可以结合起来。

```c
const char* const x;
```

上面示例中，指针变量`x`指向一个字符串。两个`const`意味着，`x`包含的内存地址以及`x`指向的字符串，都不能修改。

`const`的一个用途，就是防止函数体内修改函数参数。如果某个参数在函数体内不会被修改，可以在函数声明时，对该参数添加`const`说明符。这样的话，使用这个函数的人看到原型里面的`const`，就知道调用函数前后，参数数组保持不变。

```c
void find(const int* arr, int n);
```

上面示例中，函数`find`的参数数组`arr`有`const`说明符，就说明该数组在函数内部将保持不变。

有一种情况需要注意，如果一个指针变量指向`const`变量，那么该指针变量也不应该被修改。

```c
const int i = 1;
int* j = &i;
*j = 2; // 报错
```

上面示例中，`j`是一个指针变量，指向变量`i`，即`j`和`i`指向同一个地址。`j`本身没有`const`说明符，但是`i`有。这种情况下，`j`指向的值也不能被修改。

## static

`static`说明符对于全局变量和局部变量有不同的含义。

（1）用于局部变量（位于块作用域内部）。

`static`用于函数内部声明的局部变量时，表示该变量的值会在函数每次执行后得到保留，下次执行时不会进行初始化，就类似于一个只用于函数内部的全局变量。由于不必每次执行函数时，都对该变量进行初始化，这样可以提高函数的执行速度，详见《函数》一章。

（2）用于全局变量（位于块作用域外部）。

`static`用于函数外部声明的全局变量时，表示该变量只用于当前文件，其他源码文件不可以引用该变量，即该变量不会被链接（link）。

`static`修饰的变量，初始化时，值不能等于变量，必须是常量。

```c
int n = 10;
static m = n; // 报错
```

上面示例中，变量`m`有`static`修饰，它的值如果等于变量`n`，就会报错，必须等于常量。

只在当前文件里面使用的函数，也可以声明为`static`，表明该函数只在当前文件使用，其他文件可以定义同名函数。

```c
static int g(int i);
```

## auto

`auto`说明符表示该变量的存储，由编译器自主分配内存空间，且只存在于定义时所在的作用域，退出作用域时会自动释放。

由于只要不是`extern`的变量（外部变量），都是由编译器自主分配内存空间的，这属于默认行为，所以该说明符没有实际作用，一般都省略不写。

```c
auto int a;
// 等同于
int a;
```

## extern

`extern`说明符表示，该变量在其他文件里面声明，没有必要在当前文件里面为它分配空间。通常用来表示，该变量是多个文件共享的。

```c
extern int a;
```

上面代码中，`a`是`extern`变量，表示该变量在其他文件里面定义和初始化，当前文件不必为它分配存储空间。

但是，变量声明时，同时进行初始化，`extern`就会无效。

```c
// extern 无效
extern int i = 0;

// 等同于
int i = 0;
```

上面代码中，`extern`对变量初始化的声明是无效的。这是为了防止多个`extern`对同一个变量进行多次初始化。

函数内部使用`extern`声明变量，就相当于该变量是静态存储，每次执行时都要从外部获取它的值。

函数本身默认是`extern`，即该函数可以被外部文件共享，通常省略`extern`不写。如果只希望函数在当前文件可用，那就需要在函数前面加上`static`。

```c
extern int f(int i);
// 等同于
int f(int i);
```

## register

`register`说明符向编译器表示，该变量是经常使用的，应该提供最快的读取速度，所以应该放进寄存器。但是，编译器可以忽略这个说明符，不一定按照这个指示行事。

```c
register int a;
```

上面示例中，`register`提示编译器，变量`a`会经常用到，要为它提供最快的读取速度。

`register`只对声明在代码块内部的变量有效。

设为`register`的变量，不能获取它的地址。

```c
register int a;
int *p = &a; // 编译器报错
```

上面示例中，`&a`会报错，因为变量`a`可能放在寄存器里面，无法获取内存地址。

如果数组设为`register`，也不能获取整个数组或任一个数组成员的地址。

```c
register int a[] = {11, 22, 33, 44, 55};

int p = a;  // 报错
int a = *(a + 2); // 报错
```

历史上，CPU 内部的缓存，称为寄存器（register）。与内存相比，寄存器的访问速度快得多，所以使用它们可以提高速度。但是它们不在内存之中，所以没有内存地址，这就是为什么不能获取指向它们的指针地址。现代编译器已经有巨大的进步，会尽可能优化代码，按照自己的规则决定怎么利用好寄存器，取得最佳的执行速度，所以可能会忽视代码里面的`register`说明符，不保证一定会把这些变量放到寄存器。

## volatile

`volatile`说明符表示所声明的变量，可能会预想不到地发生变化（即其他程序可能会更改它的值），不受当前程序控制，因此编译器不要对这类变量进行优化，每次使用时都应该查询一下它的值。硬件设备的编程中，这个说明符很常用。

```c
volatile int foo;
volatile int* bar;
```

`volatile`的目的是阻止编译器对变量行为进行优化，请看下面的例子。

```c
int foo = x;
// 其他语句，假设没有改变 x 的值
int bar = x;
```

上面代码中，由于变量`foo`和`bar`都等于`x`，而且`x`的值也没有发生变化，所以编译器可能会把`x`放入缓存，直接从缓存读取值（而不是从 x 的原始内存位置读取），然后对`foo`和`bar`进行赋值。如果`x`被设定为`volatile`，编译器就不会把它放入缓存，每次都从原始位置去取`x`的值，因为在两次读取之间，其他程序可能会改变`x`。

## restrict

`restrict`说明符允许编译器优化某些代码。它只能用于指针，表明该指针是访问数据的唯一方式。

```c
int* restrict pt = (int*) malloc(10 * sizeof(int));
```

上面示例中，`restrict`表示变量`pt`是访问 malloc 所分配内存的唯一方式。

下面例子的变量`foo`，就不能使用`restrict`修饰符。

```c
int foo[10];
int* bar = foo;
```

上面示例中，变量`foo`指向的内存，可以用`foo`访问，也可以用`bar`访问，因此就不能将`foo`设为 restrict。

如果编译器知道某块内存只能用一个方式访问，可能可以更好地优化代码，因为不用担心其他地方会修改值。

`restrict`用于函数参数时，表示参数的内存地址之间没有重叠。

```c
void swap(int* restrict a, int* restrict b) {
  int t;
  t = *a;
  *a = *b;
  *b = t;
}
```

上面示例中，函数参数声明里的`restrict`表示，参数`a`和参数`b`的内存地址没有重叠。

