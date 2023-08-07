<template>
  <view class="set">
    <view class="set-top">
      <view class="image">
        <image src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg" mode="aspectFill"></image>
      </view>
      <view class="detail">
        <view class="detail-icon">
          <image src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg" mode="aspectFill"></image>
        </view>
        <view class="detail-desc">Happy New</view>
        <view class="detail-topic">「人气主题」</view>
        <view class="detail-price">4399元</view>
        <view class="detail-style">4服装｜4造型</view>
      </view>
    </view>
    <view class="set-detail">点击查看详情</view>
  </view>
  <tab-bar />
</template>
<script setup lang="ts">
import tabBar from '@/components/tab-bar.vue'
</script>
<style lang="scss" scoped>
image {
  width: 100%;
  height: 100%;
}
.set {
  display: flex;
  flex-direction: column;
  height: 400rpx;
  box-shadow: 10px 5px 5px rgb(248, 248, 248);
  margin-bottom: 10rpx;
  border-radius: 20rpx;
  &-top {
    flex: 9;
  }
  &-detail {
    flex: 1;
    text-align: center;
    color: rgb(111, 120, 126);
    font-size: 20rpx;
  }
}

.set-top {
  display: flex;
  margin: 20rpx;
  .image {
    overflow: hidden;
    border-radius: 50%;
    width: 300rpx;
    height: 300rpx;
    margin-right: 50rpx;
  }
  .detail {
    flex: 1;
  }
}

.detail {
  text-align: center;
  &-icon {
    width: 100rpx;
    height: 100rpx;
    text-align: center;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 auto;
  }

  &-desc {
    color: rgb(206, 206, 206);
    font-weight: bold;
    font-size: 30rpx;
    border-bottom: 1px solid rgb(187, 187, 186);
    margin: 10rpx;
  }
  &-topic {
    color: rgb(68, 80, 87);
    font-weight: bold;
    font-size: 40rpx;
    margin: 10rpx;
  }
  &-price {
    color: rgb(82, 181, 147);
    font-weight: bold;
    font-size: 40rpx;
    margin-top: 10rpx;
  }
  &-style {
    color: rgb(210, 209, 211);
    font-size: 20rpx;
  }
}
</style>
