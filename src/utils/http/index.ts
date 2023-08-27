import Request from './request'
import type { UserInfo } from '@/types/user'
export default function api(options) {
  const { url, data = {}, showToast = true, method } = options
  const request = new Request()
  request.interceptor.request((config, cancel) => {
    if (uni.getStorageSync('userInfo')) {
      const token = (JSON.parse(uni.getStorageSync('userInfo')) as UserInfo).token
      if (token) {
        config.header['token'] = token
      } else {
        // showFailToast({
        //   message: '登录过期，请重新登录',
        // })
        // uni.navigateTo({
        //   url: '/pages/login/index',
        // })
      }
    } else {
      // showFailToast({
      //   message: '登录过期，请重新登录',
      // })
      // uni.navigateTo({
      //   url: '/pages/login/index',
      // })
    }
    return config
  })

  request.interceptor.response(
    (response) => {
      console.log('responseL:', response)
      /* 请求之后拦截器 */
      console.log(response)
      const { code, msg, data } = response.data
      if (code === 500) {
        console.log('====')
      }
      return response
    },
    (error) => {
      // 预留可以日志上报
      return error
    }
  )

  return request.request({
    ...options,
    url,
    data,
    method,
  })
}
