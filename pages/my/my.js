// pages/my/my.js — 我的
Page({
  data: {
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
    wx.makePhoneCall({ phoneNumber: '4000000000', fail: () => {} })
  }
})
