import button from "../packages/button";
import input from "../packages/input";



// 存储组件列表
const components = [
    button,
    input,
]

const install = function (Vue, options = {}) {
    // 全局注册所有的组件
    components.forEach((item) => {
        Vue.component(item.name, item)
    })
}

// 判断是否是直接引入文件,如果是，就不用调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default{
    install,
    button,
    input,
}
