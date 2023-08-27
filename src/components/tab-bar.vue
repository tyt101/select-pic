<template>
  <view class="tabbar">
    <view class="navigator">
      <view
        v-for="(item, index) in tabBar.list"
        :key="item.pagePath"
        class="navigator-item"
        @click="switchTab(index, item)"
      >
        <uni-icon class="iconfont" :class="item.icon" font-family="icon-font"></uni-icon>
        <text :class="['item-text', { 'text-active': store.state.user.selectedIndex === item.pagePath }]">
          {{ item.text }}
        </text>
      </view>
    </view>
  </view>
</template>
<script setup lang="ts">
import { reactive, ref, computed, watch, defineProps } from 'vue'
import type { TabItem } from '@/types/tab'
import { useStore } from 'vuex'
uni.hideTabBar()
const store = useStore()
const tabBar = reactive<{ list: TabItem[] }>({
  list: [
    {
      index: 1,
      pagePath: 'pages/index/index',
      icon: 'icon-zhuye',
      text: '首页',
    },
    {
      index: 2,
      pagePath: 'pages/set/index',
      icon: 'icon-xinfeng',
      text: '套系',
    },
    {
      index: 3,
      pagePath: 'pages/my/index',
      icon: 'icon-wodewo',
      text: '我的',
    },
  ],
})
const switchTab = (tabIndex: number, tab: TabItem) => {
  let url = `/${tab.pagePath}`
  let pagePath = url
  store.commit('user/SET_SELECTED_INDEX', tab.pagePath)
  uni.switchTab({
    url: pagePath,
  })
}
</script>
<style lang="scss" scoped>
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100rpx;
  z-index: 999;
  background: #f5f5f5;
  border-top: 2rpx solid #eee;
}

.navigator {
  display: flex;
  margin: 0 auto;
  padding: 20rpx;
}

.navigator-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 30%;
  height: 100%;
  flex: 1;
}

.item-text {
  margin-top: 6rpx;
  color: #777e86;
  font-size: 24rpx;
}

.text-active {
  color: #00b890 !important;
}

.icon {
  width: 20px;
  height: 20px;
}
</style>
