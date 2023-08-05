import { defineStore } from 'pinia'
export const userStore = defineStore({
  state: () => ({
    userInfo: {
      token: '',
    },
  }),
  getter: {},
  actions: {},
  // 开启数据缓存
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'PINIA_USER',
        storage: localStorage,
      },
    ],
  },
})
