// pages/my/my.js — 我的
const mock = require('../../data/mock')

Page({
  data: {
    shop: mock.shop,
    bookings: [],
    bookingCount: 0
  },

  onShow() {
    const bookings = wx.getStorageSync('nuanlu_bookings') || []
    this.setData({
      bookings,
      bookingCount: bookings.length
    })
  },

  callService() {
    wx.makePhoneCall({ phoneNumber: mock.shop.phone, fail: () => {} })
  }
})
