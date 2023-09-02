// store/modules/user.js
import type { RES_USER_INFO } from '@/types/login'
const userModule = {
  namespaced: true,
  state: {
    // 用户信息
    userInfo: {
      vip: 1,
      isadmin: 1,
    },
    // token
    token: '',
    // tab栏目切换
    selectedIndex: 'pages/index/index',
  },
  mutations: {
    SET_VIP_LEVEL(state, val: number) {
      state.vipLevel = val
    },
    SET_ADMIN(state, val: boolean) {
      state.isAdmin = val
    },
    SET_USERINFO(state, val: RES_USER_INFO) {
      state.userInfo = val
    },
    SET_SELECTED_INDEX(state, val: string) {
      state.selectedIndex = val
    },
    SET_TOKEN(state, token: string) {
      state.token = token
    },
  },
  actions: {},
  getters: {},
}

export default userModule
