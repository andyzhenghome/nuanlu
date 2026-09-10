// pages/detail/detail.js — 商品详情
const mock = require('../../data/mock')
const { formatMoney } = require('../../utils/format')

Page({
  data: {
    item: null
  },

  onLoad(options) {
    const item = mock.stoves.find((s) => s.id === options.id)
    if (item) {
      this.setData({ item: { ...item, priceText: formatMoney(item.price), servicesText: (item.services || []).join('、') } })
      wx.setNavigationBarTitle({ title: item.name })
    }
  },

  /** 电话咨询（客服/下单） */
  callService() {
    wx.makePhoneCall({ phoneNumber: mock.shop.phone, fail: () => {} })
  }
})
