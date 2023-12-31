// 用户信息
export interface RES_USER_INFO {
  uid: number
  sex: number
  birthday: number
  phone: string
  wachatNo: string
  name: string
  isadmin: number
  /**
   * @char vip
   * @description 管理员等级(与权限按`钮相关联)
   * @enum 0 免费版，1 基础版，3 专业版，4 旗舰版
   */
  vip: number
  email: string
}

// 用户登陆
export interface QUE_LOGIN {
  vc: string
  pwd: string
  source: string
  tav: string
}
