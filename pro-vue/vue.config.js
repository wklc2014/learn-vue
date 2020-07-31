const path = require("path");
const { createMockMiddleware } = require("umi-mock-middleware");

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                "vue$": 'vue/dist/vue.esm.js',
                "@": path.resolve(__dirname, "./src"),
                "@components": path.resolve(__dirname, "./src/components"),
                "@assets": path.resolve(__dirname, "./src/assets"),
                "@pages": path.resolve(__dirname, "./src/pages"),
                "@store": path.resolve(__dirname, "./src/store"),
                "@utils": path.resolve(__dirname, "./src/utils"),
            }
        },
    },
    devServer: {
        before: app => {
            if (process.env.MOCK !== "none" && process.env.HTTP_MOCK !== "none") {
                app.use(createMockMiddleware());
            }
        }
    }
}
