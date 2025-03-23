
export default function sidebarJavascript() {
  return [
      { 
        text: "JS教程",
        items: [
          {
            text: '1.入门篇',
            collapsed: false,
            items: [
              { text: '1.1 导论', link: '/programer/javascript/1.1-introduction' },
              { text: '1.2 历史', link: '/programer/javascript/1.2-history' },
              { text: '1.3 基本语法', link: '/programer/javascript/1.3-grammar' },
            ],
          },
          {
            text: '2.数据类型',
            collapsed: false,
            items: [
              { text: '2.1 概述', link: '/programer/javascript/2.1-general' },
              { text: '2.2 null，undefined 和布尔值', link: '/programer/javascript/2.2-null-undefined-boolean' },
              { text: '2.3 数值', link: '/programer/javascript/2.3-number' },
              { text: '2.4 字符串', link: '/programer/javascript/2.4-string' },
              { text: '2.5 对象', link: '/programer/javascript/2.5-object' },
              { text: '2.6 函数', link: '/programer/javascript/2.6-function' },
              { text: '2.7 数组', link: '/programer/javascript/2.7-array' },
            ],
          },
          {
            text: '3.运算符',
            collapsed: false,
            items: [
              { text: '3.1 算术运算符', link: '/programer/javascript/3.1-arithmetic' },
              { text: '3.2 比较运算符', link: '/programer/javascript/3.2-comparison' },
              { text: '3.3 布尔运算符', link: '/programer/javascript/3.3-boolean' },
              { text: '3.4 二进制位运算符', link: '/programer/javascript/3.4-bit' },
              { text: '3.5 其他运算符，运算顺序', link: '/programer/javascript/3.5-priority' },
            ],
          },
          {
            text: '4.语法专题',
            collapsed: false,
            items: [
              { text: '4.1 数据类型的转换', link: '/programer/javascript/4.1-conversion' },
              { text: '4.2 错误处理机制', link: '/programer/javascript/4.2-error' },
              { text: '4.3 编程风格', link: '/programer/javascript/4.3-style' },
              { text: '4.4 console 对象与控制台', link: '/programer/javascript/4.4-console' },
            ],
          },
          {
            text: '5.标准库',
            collapsed: false,
            items: [
              { text: '5.1 Object 对象', link: '/programer/javascript/5.1-object' },
              { text: '5.2 属性描述对象', link: '/programer/javascript/5.2-attributes' },
              { text: '5.3 Array 对象', link: '/programer/javascript/5.3-array' },
              { text: '5.4 包装对象', link: '/programer/javascript/5.4-wrapper' },
              { text: '5.5 Boolean 对象', link: '/programer/javascript/5.5-boolean' },
              { text: '5.6 Number 对象', link: '/programer/javascript/5.6-number' },
              { text: '5.7 String 对象', link: '/programer/javascript/5.7-string' },
              { text: '5.8 Math 对象', link: '/programer/javascript/5.8-math' },
              { text: '5.9 Date 对象', link: '/programer/javascript/5.9-date' },
              { text: '5.10 RegExp 对象', link: '/programer/javascript/5.10-regexp' },
              { text: '5.11 JSON 对象', link: '/programer/javascript/5.11-json' },
            ],
          },
          {
            text: '6.面向对象编程',
            collapsed: false,
            items: [
              { text: '6.1 实例对象与 new 命令', link: '/programer/javascript/6.1-new' },
              { text: '6.2 this 关键字', link: '/programer/javascript/6.2-this' },
              { text: '6.3 对象的继承', link: '/programer/javascript/6.3-prototype' },
              { text: '6.4 Object 对象的相关方法', link: '/programer/javascript/6.4-object' },
              { text: '6.5 严格模式', link: '/programer/javascript/6.5-strict' },
            ],
          },
          {
            text: '7.异步操作',
            collapsed: false,
            items: [
              { text: '7.1 概述', link: '/programer/javascript/7.1-general' },
              { text: '7.2 定时器', link: '/programer/javascript/7.2-timer' },
              { text: '7.3 Promise 对象', link: '/programer/javascript/7.3-promise' },
            ],
          },
          {
            text: '8.DOM',
            collapsed: false,
            items: [
              { text: '8.1 概述', link: '/programer/javascript/8.1-general' },
              { text: '8.2 Node 接口', link: '/programer/javascript/8.2-node' },
              { text: '8.3 NodeList 接口，HTMLCollection 接口', link: '/programer/javascript/8.3-nodelist' },
              { text: '8.4 ParentNode 接口，ChildNode 接口', link: '/programer/javascript/8.4-parentnode' },
              { text: '8.5 Document 节点', link: '/programer/javascript/8.5-document' },
              { text: '8.6 Element 节点', link: '/programer/javascript/8.6-element' },
              { text: '8.7 属性的操作', link: '/programer/javascript/8.7-attributes' },
              { text: '8.8 Text 节点和 DocumentFragment 节点', link: '/programer/javascript/8.8-text' },
              { text: '8.9 CSS 操作', link: '/programer/javascript/8.9-css' },
              { text: '8.10 Mutation Observer API', link: '/programer/javascript/8.10-mutationobserver' },
            ],
          },
          {
            text: '9.事件',
            collapsed: false,
            items: [
              { text: '9.1 EventTarget 接口', link: '/programer/javascript/9.1-eventtarget' },
              { text: '9.2 事件模型', link: '/programer/javascript/9.2-model' },
              { text: '9.3 Event 对象', link: '/programer/javascript/9.3-event' },
              { text: '9.4 鼠标事件', link: '/programer/javascript/9.4-mouse' },
              { text: '9.5 键盘事件', link: '/programer/javascript/9.5-keyboard' },
              { text: '9.6 进度事件', link: '/programer/javascript/9.6-progress' },
              { text: '9.7 表单事件', link: '/programer/javascript/9.7-form' },
              { text: '9.8 触摸事件', link: '/programer/javascript/9.8-touch' },
              { text: '9.9 拖拉事件', link: '/programer/javascript/9.9-drag' },
              { text: '9.10 其他常见事件', link: '/programer/javascript/9.10-common' },
              { text: '9.11 GlobalEventHandlers 接口', link: '/programer/javascript/9.11-globaleventhandlers' },
            ],
          },
          {
            text: '10.浏览器模型',
            collapsed: false,
            items: [
              { text: '10.1 浏览器模型概述', link: '/programer/javascript/10.1-engine' },
              { text: '10.2 window 对象', link: '/programer/javascript/10.2-window' },
              { text: '10.3 Navigator 对象，Screen 对象', link: '/programer/javascript/10.3-navigator' },
              { text: '10.4 Cookie', link: '/programer/javascript/10.4-cookie' },
              { text: '10.5 XMLHttpRequest 对象', link: '/programer/javascript/10.5-xmlhttprequest' },
              { text: '10.6 同源限制', link: '/programer/javascript/10.6-same-origin' },
              { text: '10.7 CORS 通信', link: '/programer/javascript/10.7-cors' },
              { text: '10.8 Storage 接口', link: '/programer/javascript/10.8-storage' },
              { text: '10.9 History 对象', link: '/programer/javascript/10.9-history' },
              { text: '10.10 Location 对象，URL 对象，URLSearchParams 对象', link: '/programer/javascript/10.10-location' },
              { text: '10.11 ArrayBuffer 对象，Blob 对象', link: '/programer/javascript/10.11-arraybuffer' },
              { text: '10.12 File 对象，FileList 对象，FileReader 对象', link: '/programer/javascript/10.12-file' },
              { text: '10.13 表单，FormData 对象', link: '/programer/javascript/10.13-form' },
              { text: '10.14 IndexedDB API', link: '/programer/javascript/10.14-indexeddb' },
              { text: '10.15 Web Worker', link: '/programer/javascript/10.15-webworker' },
            ],
          },
          {
            text: '11.附录：网页元素接口',
            collapsed: false,
            items: [
              { text: '11.1 &lt;a&gt;', link: '/programer/javascript/11.1-a' },
              { text: '11.2 &lt;img&gt;', link: '/programer/javascript/11.2-image' },
              { text: '11.3 &lt;form&gt;', link: '/programer/javascript/11.3-form' },
              { text: '11.4 &lt;input&gt;', link: '/programer/javascript/11.4-input' },
              { text: '11.5 &lt;button&gt;', link: '/programer/javascript/11.5-button' },
              { text: '11.6 &lt;option&gt;', link: '/programer/javascript/11.6-option' },
              { text: '11.7 &lt;video&gt;，&lt;audio&gt;', link: '/programer/javascript/11.7-video' },
            ],
          },

        ]

      },

    

  ]
}
