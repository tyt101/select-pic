<template>
  <!-- login -->
  <view class="top">
    <view class="account">
      <view class="title">I D</view>
      <input v-model="req_login.vc" class="uni-input" focus placeholder="请输入账号/手机号" />
    </view>
    <view class="password">
      <view class="title">KEY</view>
      <input v-model="pass" type="password" class="uni-input" placeholder="请输入密码" />
    </view>
    <view class="login">
      <button class="mini-btn">获取验证码</button>
      <button class="mini-btn" @click="handleLogin">登陆</button>
    </view>
  </view>
  <view class="login-way">
    <uni-icon class="iconfont icon-a-bianzu62" font-family="icon-font"></uni-icon>
    <uni-icon class="iconfont icon-shoujidenglu" font-family="icon-font"></uni-icon>
    <uni-icon class="iconfont icon-weixin" font-family="icon-font"></uni-icon>
  </view>
  <tab-bar />
</template>
<script setup lang="ts">
import tabBar from '@/components/tab-bar.vue'
import type { QUE_LOGIN } from '@/types/login'
import { ref } from 'vue'
import { useStore } from 'vuex'
import { login } from '@/api/user'
import type { APIRESPONSE } from '@/types/common'
import { hexMd5 } from '@/utils/md5'
const store = useStore()
const pass = ref<string>('')
const req_login = ref<QUE_LOGIN>({
  vc: 'admin',
  pwd: '',
  source: '1',
  tav: '98F6FAD709E28617CF0421CC885C484F',
})
const handleLogin = async () => {
  req_login.value.pwd = hexMd5(pass.value).toUpperCase()
  try {
    const res: APIRESPONSE<[{ token: string }]> = await login({
      ...req_login.value,
    })
    if (res.code === 0) {
      const token = res.data[0].token
      store.commit('user/SET_TOKEN', token)
      uni.setStorageSync('select_token', token)
    }
  } catch (error) {
    console.log('error:', error)
  }
}
</script>
<style lang="scss" scoped>
.top {
  margin: 100rpx 0 80rpx 0;
  overflow: hidden;
}
.account,
.password {
  display: flex;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 30rpx;
  align-items: center;
}
.title {
  width: 100rpx;
}
.uni-input {
  border: 1px solid black;
  flex: 1;
  padding: 20rpx 10rpx;
  border-radius: 10rpx;
}

.login {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding-top: 20rpx;
  width: 80%;
  button {
    margin: 0;
    width: 35%;
  }
  button:nth-child(2) {
    background-color: rgb(0, 175, 133);
    color: #fff;
  }
}
.login-way {
  border-top: 1px solid gray;
  display: flex;
  justify-content: space-around;
  padding: 30px 200rpx;
  .iconfont {
    font-size: 35px;
  }
  .icon-shoujidenglu {
    color: rgb(96, 164, 75);
  }
  .icon-weixin {
    color: rgb(95, 193, 87);
  }
  .icon-a-bianzu62 {
    color: rgb(240, 145, 76);
  }
}
</style>
@/api/index