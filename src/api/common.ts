import http from '@/utils/http/index'
import type { APIRESPONSE, Banner, RES_BASIC_REFERENCE, THEME } from '@/types/common'
// 获取系统基础资料
export const getBasicReference = (data: {
  source: number
  datastr: string
}): Promise<APIRESPONSE<RES_BASIC_REFERENCE>> =>
  http({
    url: '/api/GetBaseData',
    data,
    method: 'post',
  })

// 增加基础资料
export const addBasicReference = () => http()

// 更新基础资料
export const updateBasicReference = () => {}

// 获得首页轮播
export const getBanner = (): Promise<APIRESPONSE<Banner[]>> =>
  http({
    url: '/api/GetBannerImg',
    data: {
      source: 1,
    },
    method: 'post',
  })
