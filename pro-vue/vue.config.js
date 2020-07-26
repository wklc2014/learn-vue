const path = require("path");

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                "vue": path.resolve(__dirname, "./node_modules/vue/dist/vue.esm.js"),
                "@": path.resolve(__dirname, "./src"),
                "@components": path.resolve(__dirname, "./src/components"),
                "@assets": path.resolve(__dirname, "./src/assets"),
                "@pages": path.resolve(__dirname, "./src/pages"),
                "@store": path.resolve(__dirname, "./src/store")
            }
        }
    }
}
