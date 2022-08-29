import p_button from "../packages/p_button";
import p_input from "../packages/p_input";



// 存储组件列表
const components = [
    p_button,
    p_input,
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
    p_button,
    p_input,
}
