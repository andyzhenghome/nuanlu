// app.js — 暖炉到家 全局入口
App({
  globalData: {
    cartCount: 0
  },
  onLaunch() {
    // 恢复购物车数量
    try {
      const cart = wx.getStorageSync('nuanlu_cart') || []
      this.globalData.cartCount = cart.length
    } catch (e) {}
  }
})
