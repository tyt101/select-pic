// store/modules/user.js
import type { USER_INFO_TYPE } from '@/types/login'
const userModule = {
  namespaced: true,
  state: {
    /**
     * @description 管理员等级(与权限按`钮相关联)
     * @enum 0 免费版，1 基础版，3 专业版，4 旗舰版
     */
    // 是否是管理员
    isAdmin: false,
    // 用户信息
    userInfo: {},
    // token
    token: '',
  },
  mutations: {
    SET_VIP_LEVEL(state, val: number) {
      state.vipLevel = val
    },
    SET_ADMIN(state, val: boolean) {
      state.isAdmin = val
    },
    SET_USERINFO(state, val: USER_INFO_TYPE) {
      state.userInfo = val
    },
  },
  actions: {},
  getters: {
    getVipLevel(state) {
      return state.userInfo.vip
    },
  },
}

export default userModule
