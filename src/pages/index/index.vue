<template>
  <view class="content">
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
        <swiper-item v-for="item in bannerList" :key="item.BIIID">
          <view class="swiper-item">
            <image :src="item.ImgUrl" mode="aspectFit"></image>
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
    <view class="tree-select">
      <view class="tree-select-l">
        <view
          v-for="(item, index) in themeList.data"
          :key="item.ThemeID"
          class="l-item"
          :class="selectedLBtn === index ? 'tree-select-active' : ''"
          @click="switchLBtn(index)"
          >{{ item.ThemeName }}
        </view>
      </view>
      <view class="tree-select-r">
        <view v-for="item in 20" :key="item" class="r-item" @click="goDetail(item)">
          <view class="image">
            <image src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg" mode="widthFix"> </image>
          </view>
          <view class="name">简爱</view>
          <view class="style">STYLE: <span>广州~天河</span><span>婚纱</span><span>个人</span></view>
        </view>
      </view>
    </view>
    <tab-bar />
  </view>
</template>

<script setup lang="ts">
import tabBar from '@/components/tab-bar.vue'
import { onMounted, ref } from 'vue'
import type { APIRESPONSE, RES_BASIC_REFERENCE, THEME, Banner } from '@/types/common'
import { getBasicReference, getBanner } from '@/api/common'
import { reactive } from 'vue'
// 轮播
const indicatorDots = ref(true)
const autoplay = ref(true)
const interval = ref(2000)
const duration = ref(500)
let bannerList = ref<Banner[]>([])
const getBannerList = async () => {
  try {
    const res: APIRESPONSE<Banner[]> = await getBanner()
    if (res.code === 0) {
      bannerList.value = res.data
    }
  } catch (error) {
    console.log('error:', error)
  }
}
getBannerList()

// 样片/客片按钮
const selectedPicBtn = ref(1)
const switchPic = (val: number) => {
  selectedPicBtn.value = val
}

// 主题选择按钮
const selectedLBtn = ref(0)
const switchLBtn = (val: number) => {
  selectedLBtn.value = val
}

// 主题列表
let themeList = reactive<{ data: THEME[] }>({
  data: [],
})
const getThemeList = async () => {
  try {
    const res: APIRESPONSE<RES_BASIC_REFERENCE> = await getBasicReference({
      source: 1,
      datastr: 'theme',
    })
    if (res.code === 0) {
      themeList.data = res.data.theme as THEME[]
    }
  } catch (error) {
    console.log('error:', error)
  }
}
getThemeList()

// 主题详情
const goDetail = (theme: THEME) => {
  uni.navigateTo({
    url: '/pages/index/detail?id=' + theme.ThemeID,
  })
}
</script>

<style lang="scss" scoped>
.content {
  height: 100%;
  overflow: hidden;
}

.swiper {
  height: 400rpx;
}

.swiper-item {
  display: block;
  height: 400rpx;
  line-height: 400rpx;
  text-align: center;
  image {
    width: 100%;
    height: 100%;
  }
}

.pic-select {
  display: flex;
  height: 80rpx;
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

.tree-select {
  display: flex;
  &-l {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 580rpx);
    overflow: scroll;
    color: rgb(68, 80, 87);
    font-weight: 400;
    border-right: 1rpx solid rgb(232, 232, 233);
  }
  &-active {
    color: rgb(82, 181, 146);
  }
  &-r {
    flex: 5;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 580rpx);
    overflow: scroll;
  }
}

.l-item {
  padding: 20rpx 0;
}

.r-item {
  margin: 20rpx;
  background-color: rgb(232, 232, 233);
  border-radius: 20rpx 0 20rpx 20rpx;
  padding: 10rpx 20rpx;
  .image {
    border-radius: 20rpx 0 20rpx 20rpx;
    image {
      width: 100%;
    }
  }
  .name {
  }
  .style {
    margin: 5rpx 0;
  }
}
</style>
