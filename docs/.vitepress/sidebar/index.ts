import { default as sidebarJavascript }  from './javascript'
import { default as sidebarTypescript }  from './typescript'
import { default as sidebarEs6 }  from './es6'
import { default as sidebarBash }  from './bash'
import { default as sidebarDlwarm }  from './dlwarm'
import { default as sidebarLeedl }  from './leedl'
import { default as sidebarMlnotes }  from './mlnotes'

export default {
    '/': [{
    }],
    '/programer/javascript/': sidebarJavascript(),
    '/programer/typescript/': sidebarTypescript(),
    '/programer/es6/': sidebarEs6(),
    '/programer/bash/': sidebarBash(),
    '/notes/dlwarm/': sidebarDlwarm(),
    '/notes/leedl/': sidebarLeedl(),
    '/notes/mlnotes/': sidebarMlnotes(),
}
