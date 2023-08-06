<template>
  <!--轮播 -->
  <view class="text-area">
    <swiper
      class="swiper"
      circular
      :indicator-dots="indicatorDots"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
    >
      <swiper-item v-for="item in images" :key="item">
        <view class="swiper-item">
          <image :src="item" mode="aspectFit"></image>
        </view>
      </swiper-item>
    </swiper>
  </view>
  <!-- 样片/客片 -->
  <view class="pic-select">
    <button :class="selectedPicBtn === 1 ? 'pic-select-selected' : 'unselected'" @click="switchPic(1)">样片</button>
    <button :class="selectedPicBtn === 2 ? 'pic-select-selected' : 'unselected'" @click="switchPic(2)">客片</button>
  </view>
  <!-- 列表 -->
  <tab-bar />
</template>

<script setup lang="ts">
import tabBar from '@/components/tab-bar.vue'
import { onMounted, ref } from 'vue'
const indicatorDots = ref(true)
const autoplay = ref(true)
const interval = ref(2000)
const duration = ref(500)
const images = [
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
]
const selectedPicBtn = ref(1)
const switchPic = (val: number) => {
  selectedPicBtn.value = val
}

const activeIndex = ref(0)
const items = [
  {
    text: '浙江',
    children: [
      { text: '杭州', id: 1 },
      { text: '温州', id: 2 },
      { text: '宁波', id: 3, disabled: true },
    ],
  },
  {
    text: '江苏',
    children: [
      { text: '南京', id: 4 },
      { text: '无锡', id: 5 },
      { text: '徐州', id: 6 },
    ],
  },
  { text: '福建' },
]
</script>

<style lang="scss">
.swiper {
  height: 400rpx;
}

.swiper-item {
  display: block;
  height: 400rpx;
  line-height: 300rpx;
  text-align: center;
  image {
    width: 100%;
    height: 100%;
  }
}

.pic-select {
  display: flex;
  .unselected {
    flex: 1;
    border: none;
    background-color: rgb(249, 249, 249);
    color: rgb(82, 181, 146);
    border-radius: 0;
  }
  &-selected {
    flex: 1;
    border: none;
    background-color: rgb(82, 181, 146);
    color: rgb(249, 249, 249);
    border-radius: 0;
  }
}
</style>
