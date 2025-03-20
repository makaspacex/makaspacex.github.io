---
title: ceshi.md
lang: zh-CN
date: 2024-05-15 19:54:01
author: makaspacex
cover: 
tags:
sidebar: false
publish: false
comment: false
---


<el-row>
    <el-col :span="24">
      <el-avatar :size="150" :src="headimgurl" />
    </el-col>
</el-row>
  <el-row :gutter="20">
    <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="6" :offset="6">
      <div class="grid-content ep-bg-purple" />
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="6" :offset="6">
      <div class="grid-content ep-bg-purple" />
    </el-col>
    <el-col :span="6" :offset="6">
      <div class="grid-content ep-bg-purple" />
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="12" :offset="6">
      <div class="grid-content ep-bg-purple" />
    </el-col>
  </el-row>

::: tip
{{ message }}

<span v-for="i in 10">{{ i }}</span>

这里也会变: {{ count }}
:::
<el-button type="primary" @click="count++">点击我+1：{{ count }}</el-button>
 

<style>
.dark {
  --ep-c-bg-row: #18191a;
  --ep-c-bg-purple: #46494d;
  --ep-c-bg-purple-dark: #242526;
  --ep-c-bg-purple-light: #667180;
}

.row-bg {
  padding: 10px 0;
  background-color: var(--ep-c-bg-row);
}

.ep-bg-purple-dark {
  background: var(--ep-c-bg-purple-dark);
}

.ep-bg-purple {
  background: var(--ep-c-bg-purple);
}

.ep-bg-purple-light {
  background: var(--ep-c-bg-purple-light);
}
    .el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

</style>

<script setup>
import { reactive, toRefs, ref} from 'vue'
// “ref”是用来存储值的响应式数据源。
// 理论上我们在展示该字符串的时候不需要将其包装在 ref() 中，
// 但是在下一个示例中更改这个值的时候，我们就需要它了。
const message = ref('Hello World!')
const count = ref(0)

const state = reactive({
  headimgurl:'https://cdn.jsdelivr.net/gh/makaspacex/PictureZone@main/picgo/202503201323937.png',
})

const { headimgurl } = toRefs(state)

</script>


