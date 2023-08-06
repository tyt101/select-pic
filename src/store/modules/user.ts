// store/modules/user.js
import type { USER_INFO_TYPE } from '@/types/login'
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
    SET_USERINFO(state, val: USER_INFO_TYPE) {
      state.userInfo = val
    },
    SET_SELECTED_INDEX(state, val: string) {
      state.selectedIndex = val
      console.log('state.selectedIndex:', state.selectedIndex)
    },
  },
  actions: {},
  getters: {
    // 有套系界面的用户
    getHasSetUser(state) {
      return state.userInfo.isadmin === 1 && state.userInfo.vip > 0
    },
  },
}

export default userModule
