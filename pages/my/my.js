// pages/my/my.js — 我的
const mock = require('../../data/mock')

Page({
  data: {
    shop: mock.shop,
    bookings: [],
    bookingCount: 0,
    cartCount: 0
  },

  onShow() {
    const bookings = wx.getStorageSync('nuanlu_bookings') || []
    const cart = wx.getStorageSync('nuanlu_cart') || []
    this.setData({
      bookings,
      bookingCount: bookings.length,
      cartCount: cart.length
    })
  },

  callService() {
    wx.makePhoneCall({ phoneNumber: mock.shop.phone, fail: () => {} })
  }
})
