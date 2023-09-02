import type { APIRESPONSE } from '@/types/common'
import http from '@/utils/http/index'
// 登陆
export const login = (data: Object): APIRESPONSE<[{ token: string }]> =>
  http({
    url: '/api/login',
    method: 'POST',
    data,
  })

// 验证登陆
export const checkToken = (data: Object) =>
  http({
    url: '/api/CheckToken',
    method: 'POST',
    data,
  })

// 获取用户信息
export const getUserInfo = (data: Object) =>
  http({
    url: '/api/GetUserInfo',
    method: 'POST',
    data,
  })
