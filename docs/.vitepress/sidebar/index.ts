import { default as sidebarJavascript }  from './javascript'
import { default as sidebarTypescript }  from './typescript'
import { default as sidebarEs6 }  from './es6'
import { default as sidebarBash }  from './bash'
import { default as sidebarDlwarm }  from './dlwarm'
import { default as sidebarLeedl }  from './leedl'
import { default as sidebarJoyfullPandas }  from './pandas'
import { default as sidebarMlnotes }  from './mlnotes'
import { default as sidebarwdndevLLM }  from './llm_wdndev'
import { default as sidebarClang }  from './clang'

export default {
    '/': [{
    }],
    '/programer/javascript/': sidebarJavascript(),
    '/programer/typescript/': sidebarTypescript(),
    '/programer/es6/': sidebarEs6(),
    '/programer/bash/': sidebarBash(),
    '/programer/clang/': sidebarClang(),
    '/notes/dlwarm/': sidebarDlwarm(),
    '/notes/leedl/': sidebarLeedl(),
    '/notes/mlnotes/': sidebarMlnotes(),
    '/programer/pandas/': sidebarJoyfullPandas(),
    '/llm/wdndev/': sidebarwdndevLLM(),
}
