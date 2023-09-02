<template>
  <view class="container">
    <view class="circle">
      <span>15</span>
      <span class="invite">邀</span>
    </view>
    <view class="text">邀请用户可以升级功能或延长服务</view>
  </view>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.circle {
  position: relative;
  border-radius: 50%;
  width: 60rpx;
  height: 60rpx;
  text-align: center;
  line-height: 60rpx;
  border: 1rpx solid #808080;
}
.invite {
  position: absolute;
  top: -30rpx;
  right: 10rpx;
}
.text {
  width: 250rpx;
  align-self: center;
  margin-top: 25rpx;
  color: #808080;
}
</style>
