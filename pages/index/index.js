// pages/index/index.js — 首页
const mock = require('../../data/mock')
const { formatMoney } = require('../../utils/format')

Page({
  data: {
    banners: mock.banners,
    shop: mock.shop,
    hotStoves: []
  },

  onLoad() {
    // 热销推荐：取 hot 标记的炉子，附加价格文本
    const hotStoves = mock.stoves
      .filter((s) => s.hot)
      .map((s) => ({ ...s, priceText: formatMoney(s.price) }))
    this.setData({ hotStoves })
  },

  /** tabBar 页面（不能用 navigateTo） */
  TAB_PAGES: ['/pages/index/index', '/pages/my/my'],

  /** 三大入口 / 通用跳转（tabBar 页走 switchTab，普通页走 navigateTo） */
  goPage(e) {
    const url = e.currentTarget.dataset.url
    if (!url) return
    if (this.TAB_PAGES.indexOf(url) > -1) {
      wx.switchTab({ url })
    } else {
      wx.navigateTo({ url })
    }
  },

  /** 点击搜索栏 → 炉子列表 */
  goSearch() {
    wx.navigateTo({ url: '/pages/stove-list/stove-list?focus=1' })
  },

  /** 全部炉子 */
  goStoveList() {
    wx.navigateTo({ url: '/pages/stove-list/stove-list' })
  },

  /** 智能选炉 */
  goPicker() {
    wx.navigateTo({ url: '/pages/picker/picker' })
  },

  /** 商品详情 */
  goDetail(e) {
    wx.navigateTo({ url: `/pages/detail/detail?id=${e.currentTarget.dataset.id}` })
  },

  /** 品牌带 → 我的页（店铺信息） */
  goAbout() {
    wx.switchTab({ url: '/pages/my/my' })
  }
})
