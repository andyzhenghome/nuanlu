// pages/picker/picker.js — 智能选炉
const mock = require('../../data/mock')
const { formatMoney, pickByArea } = require('../../utils/format')

Page({
  data: {
    area: '',
    insulate: 'normal', // normal 一般 / good 较好
    result: null,
    needPower: 0
  },

  onArea(e) {
    this.setData({ area: e.detail.value })
  },

  onInsulate(e) {
    this.setData({ insulate: e.currentTarget.dataset.v })
  },

  /** 匹配：保温一般按 1kW 带 9㎡（系数 1.15），保温好按 1kW 带 11㎡（系数 0.9） */
  doMatch() {
    const area = Number(this.data.area)
    if (!area || area <= 0) {
      wx.showToast({ title: '请输入取暖面积', icon: 'none' })
      return
    }
    // 等效面积：保温差需要更大功率
    const effArea = this.data.insulate === 'good' ? area * 0.9 : area * 1.15
    const { needPower, list } = pickByArea(effArea, mock.stoves)
    this.setData({
      needPower,
      result: list.map((s) => ({ ...s, priceText: formatMoney(s.price) }))
    })
    wx.pageScrollTo({ scrollTop: 300, duration: 200 })
  },

  goDetail(e) {
    wx.navigateTo({ url: `/pages/detail/detail?id=${e.currentTarget.dataset.id}` })
  }
})
