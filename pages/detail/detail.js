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
      this.setData({ item: { ...item, priceText: formatMoney(item.price) } })
      wx.setNavigationBarTitle({ title: item.name })
    }
  },

  /** 加入清单 */
  addCart() {
    const cart = wx.getStorageSync('nuanlu_cart') || []
    cart.push({ name: this.data.item.name, at: Date.now() })
    wx.setStorageSync('nuanlu_cart', cart)
    getApp().globalData.cartCount = cart.length
    wx.showToast({ title: '已加入清单', icon: 'success' })
  },

  /** 立即下单（v1 提示下单方式） */
  buyNow() {
    wx.showModal({
      title: '确认下单',
      content: `「${this.data.item.name}」¥${this.data.item.priceText}\n\n电话订购：400-000-0000\n或下单后师傅电话与您确认送装时间。`,
      confirmText: '提交订单',
      cancelText: '再看看',
      success: (r) => {
        if (r.confirm) {
          wx.showToast({ title: '订单已提交', icon: 'success' })
        }
      }
    })
  },

  callService() {
    wx.makePhoneCall({ phoneNumber: '4000000000', fail: () => {} })
  }
})
