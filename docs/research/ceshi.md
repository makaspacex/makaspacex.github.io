---
title: ceshi.md
lang: zh-CN
date: 2024-05-15 19:54:01
author: makaspacex
cover: 
tags:
---

::: tip
{{ message }}

<span v-for="i in 3">{{ i }}</span>

这里也会变: {{ count }}
:::


<el-button type="primary" @click="count++">点击我+1：{{ count }}</el-button>

<script setup>
import { ref } from 'vue'
// “ref”是用来存储值的响应式数据源。
// 理论上我们在展示该字符串的时候不需要将其包装在 ref() 中，
// 但是在下一个示例中更改这个值的时候，我们就需要它了。
const message = ref('Hello World!')
const count = ref(0)

</script>


