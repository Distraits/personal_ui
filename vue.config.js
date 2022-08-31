const { defineConfig } = require('@vue/cli-service')

const path = require("path");
function resolve(dir) {
    return path.join(__dirname, dir);
}


module.exports = defineConfig({
    pages:{
        index:{
            entry:'examples/main.js',
            template:'examples/index.html',
            filename:'index.html',
        }
    },

    chainWebpack: config => {
        config.resolve.alias
            .set("@", resolve("examples"))
            .set("assets", resolve("examples/assets"))
            .set("packages", resolve("packages"))
    },



})
