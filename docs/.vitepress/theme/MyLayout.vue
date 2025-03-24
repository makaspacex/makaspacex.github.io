<script setup lang="ts">
import { useData } from 'vitepress'
import { ref } from 'vue'
import { BlogTheme as SugaratTheme } from "@sugarat/theme"
const { Layout } = SugaratTheme
const { theme, params, frontmatter, page, localeIndex,isDark } = useData()
// [ "site", "theme", "page", "frontmatter", "params", "lang", "dir", "localeIndex", "title", "description", "isDark", "hash" ]

// const perlink = `https://blog.makafly.com/${page.relativePath.slice(0,-3)}.html`;
const perlink = `https://blog.makafly.com/${page.value.relativePath.slice(0,-3)}.html`;

</script>

<template>
    <Layout>
        <template #doc-footer-before>
            <div id="footer-card">
                <p>永久链接：<a :href="perlink">{{ perlink }}</a></p>
            </div>
        </template>
    </Layout>
</template>

<style>
#footer-card {
    font-size: small;
    width: 100%;
    margin: 10px auto;
    padding: 15px;
    text-align: left;
    color: #656d76;
    background-color: #f6f8fa;
    border: 1px solid #d0d7de;
    border-radius: .25rem;
}
.dark #footer-card {
    color: #7F858F;
    background-color: #171B22;
    border: 1px solid #30363d;
}
</style>