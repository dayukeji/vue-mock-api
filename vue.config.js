const IS_MOCK = process.env.IS_MOCK === 'true'; // 当运行dev:mock时为true

module.exports = {
  // 利用webpack definePlugin注入全局变量
  chainWebpack: (config) => {
    config.plugin('define').tap((args) => {
      args[0].IS_MOCK = IS_MOCK;
      return args;
    });
  },
};
