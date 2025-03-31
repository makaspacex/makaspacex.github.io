
export default function sidebarClang() {
    return [
        {
            text: 'C 语言教程',
            items: [
                { text: "简介", link: "/programer/clang/intro.md" },
                { text: "基本语法", link: "/programer/clang/syntax.md" },
                { text: "变量", link: "/programer/clang/variable.md" },
                { text: "运算符", link: "/programer/clang/operator.md" },
                { text: "流程控制", link: "/programer/clang/flow-control.md" },
                { text: "数据类型", link: "/programer/clang/types.md" },
                { text: "指针", link: "/programer/clang/pointer.md" },
                { text: "函数", link: "/programer/clang/function.md" },
                { text: "数组", link: "/programer/clang/array.md" },
                { text: "字符串", link: "/programer/clang/string.md" },
                { text: "内存管理", link: "/programer/clang/memory.md" },
                { text: "struct 结构", link: "/programer/clang/struct.md" },
                { text: "typedef 命令", link: "/programer/clang/typedef.md" },
                { text: "Union 结构", link: "/programer/clang/union.md" },
                { text: "Enum 类型", link: "/programer/clang/enum.md" },
                { text: "预处理器", link: "/programer/clang/preprocessor.md" },
                { text: "I/O 函数", link: "/programer/clang/io.md" },
                { text: "文件操作", link: "/programer/clang/file.md" },
                { text: "变量说明符", link: "/programer/clang/specifier.md" },
                { text: "多文件项目", link: "/programer/clang/multifile.md" },
                { text: "命令行环境", link: "/programer/clang/cli.md" },
                { text: "多字节字符", link: "/programer/clang/multibyte.md" },
                {
                    text: "标准库",
                    collapsed: true,
                    items: [
                        { text: "assert.h", link: "/programer/clang/lib/assert.h.md" },
                        { text: "ctype.h", link: "/programer/clang/lib/ctype.h.md" },
                        { text: "errno.h", link: "/programer/clang/lib/errno.h.md" },
                        { text: "float.h", link: "/programer/clang/lib/float.h.md" },
                        { text: "inttypes.h", link: "/programer/clang/lib/inttypes.h.md" },
                        { text: "iso646.h", link: "/programer/clang/lib/iso646.h.md" },
                        { text: "limits.h", link: "/programer/clang/lib/limits.h.md" },
                        { text: "locale.h", link: "/programer/clang/lib/locale.h.md" },
                        { text: "math.h", link: "/programer/clang/lib/math.h.md" },
                        { text: "signal.h", link: "/programer/clang/lib/signal.h.md" },
                        { text: "stdint.h", link: "/programer/clang/lib/stdint.h.md" },
                        { text: "stdlib.h", link: "/programer/clang/lib/stdlib.h.md" },
                        { text: "stdio.h", link: "/programer/clang/lib/stdio.h.md" },
                        { text: "string.h", link: "/programer/clang/lib/string.h.md" },
                        { text: "time.h", link: "/programer/clang/lib/time.h.md" },
                        { text: "wchar.h", link: "/programer/clang/lib/wchar.h.md" },
                        { text: "wctype.h", link: "/programer/clang/lib/wctype.h.md" },
                    ]
                },

            ]
        }
    ]
}
