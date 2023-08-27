import { BASE_URL } from '../env'
class Request {
  // 默认请求配置文件
  config = {
    baseUrl: BASE_URL,
    header: {
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    method: 'GET',
    timeout: '60000',
    dataType: 'json',
    // #ifndef APP-PLUS
    responseType: 'text',
    sslVerify: 'false', //验证ssl证书
    // #endif
  }

  // 判断url是否为绝对路径
  static posUrl(url) {
    return /(http|https):\/\/([\w.]+\/?)\S*/.test(url)
  }

  // 参数转换
  static addQueryString(params) {
    let paramsData = ''
    Object.keys(params).forEach(function (key) {
      paramsData += key + '=' + encodeURIComponent(params[key]) + '&'
    })
    return paramsData.substring(0, paramsData.length - 1)
  }

  // 拦截器
  interceptor = {
    request: (cb) => {
      if (cb) {
        this.requestBeforeFn = cb
      }
    },

    response: (cb, errCb) => {
      if (cb && errCb) {
        this.requestCompletedFn = cb
        this.requestCompletedFailFn = errCb
      }
    },
  }

  requestBeforeFn(config) {
    return config
  }
  requestCompletedFn(response) {
    return response
  }
  requestCompletedFailFn(response) {
    return response
  }

  // 校验状态
  validateStatus(statusCode) {
    return statusCode === 200
  }

  async request(options: {}) {
    options.baseUrl = options.baseUrl || this.config.baseUrl
    options.header = options.header || this.config.header
    options.method = options.method || this.config.method
    options.timeout = options.timeout || this.config.timeout
    options.dataType = options.dataType || this.config.dataType
    // #ifdef APP-PLUS
    options.responseType = options.responseType || this.config.responseType
    options.sslVerify = options.sslVerify === undefined ? this.config.sslVerify : options.sslVerify
    // #endif

    return new Promise((resolve, reject) => {
      // 判断是否取消
      let next = true
      let handleRes = {}
      options.complete = (response) => {
        response.config = handleRes
        if (this.validateStatus(response.statusCode)) {
          // 成功
          response = this.requestCompletedFn(response)
          resolve(response.data)
        } else if (401 === response.statusCode) {
          response = this.requestCompletedFn(response)
          resolve(response.data)
        } else if (500 === response.statusCode) {
          resolve(response.data)
        } else {
          response = this.requestCompletedFailFn(response)
          reject(response)
        }
      }
      const cancel = (t = 'handle cancel', config = options) => {
        const err = { errMsg: t, config }
        reject(err)
        next = false
      }

      handleRes = { ...this.requestBeforeFn(options, cancel) }
      const _config = { ...handleRes }

      if (!next) return
      let mergeUrl = Request.posUrl(_config.url) ? _config.url : _config.baseUrl + _config.url
      if (JSON.stringify(_config.params) === '{}') {
        const params = Request.addQueryString(_config.params)
        mergeUrl += mergeUrl.indexOf('?') !== -1 ? `&${params}` : `?${params}`
      }

      _config.url = mergeUrl

      uni.request(_config)
    })
  }
  get(url, options = {}) {
    return this.request({
      url,
      method: 'GET',
      ...options,
    })
  }

  post(url, data, options = {}) {
    return this.request({
      url,
      data,
      method: 'POST',
      ...options,
    })
  }
}

export default Request
