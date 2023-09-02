<template>
  <view class="person">
    <view class="info">
      <view class="name">杨静云</view>
      <view class="type">
        <view class="type-active">拍摄：10</view>
        <view>已付：10</view>
        <view>未付：10</view>
      </view>
    </view>
    <view class="btn">
      <button v-if="wx_bind">绑定微信</button>
      <button>退出登陆</button>
    </view>
  </view>
  <!-- 订单列表 -->
  <view class="order">
    <view class="item">
      <view class="item-title">
        <view>拍摄店铺：广州纯色工作室</view>
        <view>拍查看订单</view>
      </view>
      <view class="item-pay">
        <button class="btn btn-active">继续支付</button>
        <button class="btn">选片</button>
        <button class="btn">底片</button>
        <button class="btn">精修</button>
      </view>
      <view class="item-progress">
        <view class="item-progress-active">下单</view>
        <span class="w_line"></span>
        <view>支付</view>
        <span class="w_line"></span>
        <view>拍摄</view>
        <span class="w_line"></span>
        <view>修片</view>
        <span class="w_line"></span>
        <view>交付</view>
      </view>
    </view>
    <view class="item">
      <view class="item-title">
        <view>拍摄店铺：广州纯色工作室</view>
        <view>拍查看订单</view>
      </view>
      <view class="item-pay">
        <button class="btn btn-active">继续支付</button>
        <button class="btn">选片</button>
        <button class="btn">底片</button>
        <button class="btn">精修</button>
      </view>
      <view class="item-progress">
        <view class="item-progress-active">下单</view>
        <span class="w_line"></span>
        <view>支付</view>
        <span class="w_line"></span>
        <view>拍摄</view>
        <span class="w_line"></span>
        <view>修片</view>
        <span class="w_line"></span>
        <view>交付</view>
      </view>
    </view>
    <view class="item">
      <view class="item-title">
        <view>拍摄店铺：广州纯色工作室</view>
        <view>拍查看订单</view>
      </view>
      <view class="item-pay">
        <button class="btn btn-active">继续支付</button>
        <button class="btn">选片</button>
        <button class="btn">底片</button>
        <button class="btn">精修</button>
      </view>
      <view class="item-progress">
        <view class="item-progress-active">下单</view>
        <span class="w_line"></span>
        <view>支付</view>
        <span class="w_line"></span>
        <view>拍摄</view>
        <span class="w_line"></span>
        <view>修片</view>
        <span class="w_line"></span>
        <view>交付</view>
      </view>
    </view>
    <view class="item">
      <view class="item-title">
        <view>拍摄店铺：广州纯色工作室</view>
        <view>拍查看订单</view>
      </view>
      <view class="item-pay">
        <button class="btn btn-active">继续支付</button>
        <button class="btn">选片</button>
        <button class="btn">底片</button>
        <button class="btn">精修</button>
      </view>
      <view class="item-progress">
        <view class="item-progress-active">下单</view>
        <span class="w_line"></span>
        <view>支付</view>
        <span class="w_line"></span>
        <view>拍摄</view>
        <span class="w_line"></span>
        <view>修片</view>
        <span class="w_line"></span>
        <view>交付</view>
      </view>
    </view>
    <view class="item">
      <view class="item-title">
        <view>拍摄店铺：广州纯色工作室</view>
        <view>拍查看订单</view>
      </view>
      <view class="item-pay">
        <button class="btn btn-active">继续支付</button>
        <button class="btn">选片</button>
        <button class="btn">底片</button>
        <button class="btn">精修</button>
      </view>
      <view class="item-progress">
        <view class="item-progress-active">下单</view>
        <span class="w_line"></span>
        <view>支付</view>
        <span class="w_line"></span>
        <view>拍摄</view>
        <span class="w_line"></span>
        <view>修片</view>
        <span class="w_line"></span>
        <view>交付</view>
      </view>
    </view>
    <view class="item">
      <view class="item-title">
        <view>拍摄店铺：广州纯色工作室</view>
        <view>拍查看订单</view>
      </view>
      <view class="item-pay">
        <button class="btn btn-active">继续支付</button>
        <button class="btn">选片</button>
        <button class="btn">底片</button>
        <button class="btn">精修</button>
      </view>
      <view class="item-progress">
        <view class="item-progress-active">下单</view>
        <span class="w_line"></span>
        <view>支付</view>
        <span class="w_line"></span>
        <view>拍摄</view>
        <span class="w_line"></span>
        <view>修片</view>
        <span class="w_line"></span>
        <view>交付</view>
      </view>
    </view>
  </view>

  <!-- 底部 -->
  <BottomVue />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import BottomVue from '@/components/bottom.vue'
// 是否绑定微信
const wx_bind = ref<boolean>(true)
</script>
<style lang="scss" scoped>
.person {
  padding: 10rpx 20rpx 20rpx 20rpx;
  display: flex;
  justify-content: space-between;
  border-bottom: 1rpx solid #f2f2f2;
  box-shadow: 0px 1rpx 0px #f2f2f2;
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .name {
      font-weight: bold;
      font-size: 45rpx;
    }
    .type {
      display: flex;
      &-active {
        background-color: rgb(0, 175, 133);
        color: #ffffff;
      }
      view {
        border: 1rpx solid #808080;
        border-radius: 40rpx;
        margin: 10rpx 15rpx 0 0;
        padding: 10rpx 25rpx;
      }
    }
  }
  .btn {
    button {
      background-color: rgb(57, 70, 78);
      color: #ffffff;
      padding: 0 30rpx;
      font-size: 25rpx;
      margin-top: 10rpx;
    }
  }
}
// 订单列表
.order {
  padding: 20rpx;
}
.item {
  box-shadow: 0 0 5px #ccc;
  padding: 20rpx;
  border-radius: 10rpx;
  margin-bottom: 20rpx;
  &-title {
    display: flex;
    justify-content: space-between;
  }
  &-pay {
    display: flex;
    .btn {
      margin: 20rpx 20rpx 20rpx 0;
      flex: 1;
      font-size: 25rpx;
      background-color: rgb(154, 163, 170);
      &-active {
        background-color: rgb(0, 175, 133);
        color: #ffffff;
      }
    }
    button:nth-child(4) {
      margin-right: 0;
    }
  }
  &-progress {
    display: flex;
    view {
      flex: 1;
      border: 1px solid rgb(195, 195, 195);
      border-radius: 50rpx;
      text-align: center;
    }
    &-active {
      color: #ffffff;
      background-color: rgb(57, 70, 78);
    }
  }
}
.w_line {
  width: 40rpx;
  height: 1rpx;
  background-color: #000000;
  display: flex;
  align-self: center;
}
</style>
