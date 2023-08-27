export interface APIRESPONSE<T> {
  data: T
  msg: string
  code: number
  count: number
}

// 系统基础资料
export interface RES_BASIC_REFERENCE {
  take?: TAKE[]
  clo?: CLO[]
  cust?: CUST[]
  ext?: EXT[]
  capture?: CAPTURE[]
  theme?: THEME[]
  dep?: DEP[]
  travel?: TRAVEL[]
  grade?: GRADE[]
  iden?: IDEN[]
}

interface TAKE {
  TKID: string
  TakeName: string
}

interface CLO {
  CTIID: string
  CloName: string
}

interface CUST {
  CustID: string
  CustName: string
}

interface EXT {
  EBID: string
  EBName: string
}

interface CAPTURE {
  CBID: string
  CBName: string
}

interface THEME {
  ThemeID: string
  ThemeName: string
}

interface DEP {}

interface TRAVEL {}

interface GRADE {}

interface IDEN {}

// 添加基础资料
export interface REQ_ADD_BASIC {
  source: string
  datastr: string
  name: string
}

// 更新基础资料
export interface REQ_UPDATE_BASIC {
  source: string
  datastr: string
  name: string
  id: string
}

// 上传图片
export interface REQ_UPLOAD_IMG {
  file: string
  source: string
}

export interface RES_UPLOAD_IMG {
  imgurl: string
}
