// pages/my/my.js — 我的
const mock = require('../../data/mock')

Page({
  data: {
    shop: mock.shop
  },

  callService() {
    wx.makePhoneCall({ phoneNumber: mock.shop.phone, fail: () => {} })
  }
})
