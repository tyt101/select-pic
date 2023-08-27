interface EnvApi {
  development: string
  production: string
}
const ENV_BASE_URL: EnvApi = {
  development: 'http://120.198.63.186:8090', //开发环境
  // development: 'https://lan.alphaess.com', //开发环境
  production: 'http://120.198.63.186:8090', //生产环境
}

const NODE_ENV: string = process.env.NODE_ENV
export const BASE_URL = ENV_BASE_URL[NODE_ENV || 'development'] //后台根域名
