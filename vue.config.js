const IS_MOCK = process.env.IS_MOCK === 'true'; // 当运行dev:mock时为true

console.log('IS_MOCKIS_MOCK',IS_MOCK)

module.exports = {
  // 利用webpack definePlugin注入全局变量
  chainWebpack: (config) => {
    config.plugin('define').tap((args) => {
      args[0].IS_MOCK = IS_MOCK;
      return args;
    });
  },
  devServer: {
    proxy: {
      '/api':{
        target: IS_MOCK ? 'http://localhost:3306' : 'xxxx',
        ws: true,
        changeOrigin: true,
        // pathRewrite：把链接里的api干掉
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};
