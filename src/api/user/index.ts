import http from '..'
// 登陆
export const login = (data: Object) =>
  http.request({
    url: '/api/login',
    method: 'POST',
    data,
  })

// 验证登陆
export const checkToken = (data: Object) =>
  http.request({
    url: '/api/CheckToken',
    method: 'POST',
    data,
  })

// 获取用户信息
export const getUserInfo = (data: Object) =>
  http.request({
    url: '/api/GetUserInfo',
    method: 'POST',
    data,
  })
