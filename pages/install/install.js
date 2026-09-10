// pages/install/install.js — 安装服务预约（含进度追踪）
const mock = require('../../data/mock')

const WEEK = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
const SLOT_NAMES = ['上午 8:00-12:00', '下午 13:00-18:00']

function pad(n) { return n < 10 ? '0' + n : '' + n }

function nowText() {
  const d = new Date()
  return `${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`
}

Page({
  data: {
    guarantees: mock.guarantees,
    fees: mock.installFees,
    steps: mock.installSteps,
    worker: mock.worker,
    workerInitial: mock.worker.name.charAt(0),
    shop: mock.shop,
    // 仅"已签收"订单可预约
    orders: mock.orders
      .filter((o) => o.status === '已签收')
      .map((o) => ({ ...o, label: `${o.model} · ${o.id}` })),
    orderIndex: -1,
    addr: '',
    dateList: [],
    dateIndex: -1,
    slotIndex: -1,
    remark: '',
    booking: null
  },

  onLoad() {
    this.setData({ dateList: this.buildDates() })
  },

  onShow() {
    // 恢复最近一条预约（含进度）
    const list = wx.getStorageSync('nuanlu_bookings') || []
    if (list.length > 0) this.setData({ booking: list[0] })
  },

  /** 生成未来 7 天日期，第 4 天模拟约满 */
  buildDates() {
    const arr = []
    for (let i = 0; i < 7; i++) {
      const d = new Date(Date.now() + i * 86400000)
      arr.push({
        weekday: i === 0 ? '今天' : i === 1 ? '明天' : WEEK[d.getDay()],
        day: `${pad(d.getMonth() + 1)}-${pad(d.getDate())}`,
        value: `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`,
        full: i === 3
      })
    }
    return arr
  },

  /** 选择关联订单 → 自动带入地址 */
  onOrderPick(e) {
    const i = Number(e.detail.value)
    this.setData({
      orderIndex: i,
      addr: this.data.orders[i].addr
    })
  },

  onAddr(e) { this.setData({ addr: e.detail.value }) },
  onRemark(e) { this.setData({ remark: e.detail.value }) },

  onDatePick(e) {
    const i = Number(e.currentTarget.dataset.i)
    if (this.data.dateList[i].full) {
      wx.showToast({ title: '该日期已约满', icon: 'none' })
      return
    }
    this.setData({ dateIndex: i })
  },

  onSlotPick(e) {
    this.setData({ slotIndex: Number(e.currentTarget.dataset.i) })
  },

  /** 提交预约 → 待接单状态 */
  submit() {
    const { orders, orderIndex, addr, dateList, dateIndex, slotIndex } = this.data
    if (orders.length === 0) {
      return wx.showToast({ title: '请先在客服电话下单', icon: 'none' })
    }
    if (orderIndex < 0) return wx.showToast({ title: '请选择关联订单', icon: 'none' })
    if (!addr.trim()) return wx.showToast({ title: '请填写安装地址', icon: 'none' })
    if (dateIndex < 0) return wx.showToast({ title: '请选择预约日期', icon: 'none' })
    if (slotIndex < 0) return wx.showToast({ title: '请选择时间段', icon: 'none' })

    const booking = {
      id: `BK${Date.now()}`,
      orderId: orders[orderIndex].id,
      model: orders[orderIndex].model,
      addr: addr.trim(),
      date: `${dateList[dateIndex].weekday} ${dateList[dateIndex].day}`,
      slot: SLOT_NAMES[slotIndex],
      remark: this.data.remark.trim(),
      step: 0,
      times: [nowText(), '', '', '', ''],
      status: mock.installSteps[0],
      createdAt: Date.now()
    }

    const list = wx.getStorageSync('nuanlu_bookings') || []
    list.unshift(booking)
    wx.setStorageSync('nuanlu_bookings', list)
    this.setData({ booking })
    wx.showToast({ title: '预约成功，待师傅接单', icon: 'success' })
  },

  /** 演示：模拟师傅推进到下一节点 */
  demoAdvance() {
    const booking = this.data.booking
    if (!booking || booking.step >= this.data.steps.length - 1) return
    const next = booking.step + 1
    booking.step = next
    booking.status = this.data.steps[next]
    booking.times[next] = nowText()
    const list = wx.getStorageSync('nuanlu_bookings') || []
    list[0] = booking
    wx.setStorageSync('nuanlu_bookings', list)
    this.setData({ booking })
    wx.showToast({ title: this.data.steps[next], icon: 'none' })
  },

  callWorker() {
    wx.makePhoneCall({ phoneNumber: mock.worker.phone, fail: () => {} })
  },

  callService() {
    wx.makePhoneCall({ phoneNumber: mock.shop.phone, fail: () => {} })
  }
})
