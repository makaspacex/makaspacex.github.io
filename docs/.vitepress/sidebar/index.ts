import { default as sidebarJavascript }  from './javascript'
import { default as sidebarTypescript }  from './typescript'
import { default as sidebarEs6 }  from './es6'
import { default as sidebarBash }  from './bash'

export default {
    '/': [{
    }],
    '/programer/javascript/': sidebarJavascript(),
    '/programer/typescript/': sidebarTypescript(),
    '/programer/es6/': sidebarEs6(),
    '/programer/bash/': sidebarBash(),
}
