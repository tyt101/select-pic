<template>
  <!-- 套系信息 -->
  <view class="basic">
    <view class="img">
      <image src="http://120.198.63.186:8091/banner/13334211055194400_01.jpg" mode="spectFit"></image>
    </view>
    <view class="set">
      <view class="theme">人气主题</view>
      <view class="price">
        <view class="price-real">¥4399</view>
        <view class="price-ding">定金：¥100</view>
      </view>
      <view class="pay">
        <view class="pay-real">全部支付</view>
        <view class="pay-ding">支付定金</view>
      </view>
    </view>
  </view>

  <!-- 套餐内容  -->
  <view class="content">
    <view v-for="item in 8" :key="item" class="content-item">
      <uni-icon font-family="iconfont" class="iconfont icon-play"></uni-icon>
      <span>内景</span>
      <span class="number">5</span>
    </view>
  </view>

  <!-- 详细介绍 -->
  <view class="intro">
    <view v-for="item in 3" :key="item">
      <view class="header">
        <span class="h_line"></span>
        <span>拍摄特色</span>
      </view>
      <view class="main">
        <!--  -->
        111
      </view>
    </view>
  </view>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
// 套系信息
image {
  border-radius: 20rpx;
}
.basic {
  display: flex;
  padding: 20rpx;
  border-bottom: 1rpx solid #c5c5c56f;
  .img {
    flex: 1.2;
    box-shadow: 0 0 5px #ccc;
    border-radius: 20rpx;
    padding: 10rpx;
  }
  .set {
    flex: 1;
  }
}
.set {
  margin-left: 20rpx;
  color: #ffffff;
  .theme {
    font-weight: bold;
    color: #000000;
  }
  .price {
    display: flex;
    margin: 20rpx 0;
    &-real {
      padding: 10rpx 35rpx;
      border-radius: 10rpx;
      background-color: rgb(0, 175, 133);
    }
    &-ding {
      color: #808080;
      font-size: 22rpx;
      margin-top: 25rpx;
      margin-left: 30rpx;
    }
  }
  .pay {
    display: flex;
    justify-content: space-between;
    &-real {
      padding: 5rpx 10rpx;
      border-radius: 10rpx;
      background-color: rgb(0, 175, 133);
    }
    &-ding {
      padding: 5rpx 10rpx;
      border-radius: 10rpx;
      background-color: rgb(57, 70, 78);
    }
  }
}

// 套餐内容
.content {
  display: flex;
  flex-wrap: wrap;
  margin: 30rpx 20rpx 0 20rpx;
  &-item {
    box-sizing: border-box;
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20rpx;
    border: 1rpx solid #808080;
    padding: 30rpx 0 10rpx 0;
    color: #808080;
    span {
      display: inline-block;
      padding: 10rpx 0;
    }
    .icon-play {
      color: rgb(252, 107, 27);
    }
    .number {
      color: #000000;
    }
  }
}

// 详细介绍
.intro {
  padding: 0 20rpx;
}
.header {
  color: rgb(0, 175, 133);
  background-color: rgb(235, 235, 235);
  height: 80rpx;
  display: flex;
  align-items: center;
}
.main {
  margin: 15rpx;
}
.h_line {
  display: inline-block;
  width: 10rpx;
  height: 70%;
  background-color: rgb(0, 175, 133);
  margin: 0 15rpx;
}
</style>
