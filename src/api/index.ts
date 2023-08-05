import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import { userStore } from '@/store/module/user'
interface userInfo {
  userInfo: {
    token: string
  }
}
class Request {
  private readonly baseUrl: string
  constructor() {
    this.baseUrl = 'http://localhost:5173/'
  }
  // 配置文件
  getInsideConfig() {
    const config = {
      // 所有的请求地址前缀部分
      baseURL: this.baseUrl,
      // 请求超时时间(毫秒)
      timeout: 80000,
      // 异步请求携带cookie
      withCredentials: true,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
    }
    return config
  }
  // 拦截器
  interceptors(instance: AxiosInstance, url: string | number | undefined) {
    // 请求拦截
    instance.interceptors.request.use(
      (config) => {
        // 添加全局的loading..
        // 请求头携带token
        // const user: userInfo = userStore()
        // const token = user.userInfo.token
        // if (token) {
        //   config.headers['token'] = `${token}`
        // }
        return config
      },
      (error: any) => {
        return Promise.reject(error)
      }
    )
    //响应拦截
    instance.interceptors.response.use(
      (res) => {
        //返回数据
        const {
          data: { data: resData, code },
        } = res
        if (code === 0) {
          return resData[0]
        }
      },
      (error: any) => {
        return Promise.reject(error)
      }
    )
  }
  // 请求
  request(options: AxiosRequestConfig) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}

const http = new Request()
export default http
