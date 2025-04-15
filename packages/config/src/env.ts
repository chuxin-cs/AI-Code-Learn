const Config = {
  // 开发环境
  development: {
    baseUrl: `https://apis-tocc-test.123cx.com`,
  },
};

const currentMode = process.env.NODE_ENV || 'development';
const { baseUrl } = Config[currentMode] || {};

export { baseUrl };
