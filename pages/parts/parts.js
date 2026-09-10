// pages/parts/parts.js — 配件耗材（左分类 + 右商品，双向联动）
const mock = require('../../data/mock')
const { formatMoney } = require('../../utils/format')

Page({
  data: {
    categories: [],
    activeCat: 0,
    scrollInto: '',
    keyword: '',
    searchResults: []
  },

  // 右侧各分类区块的偏移量（相对滚动容器）
  _sectionTops: [],
  _tapLock: false,

  onLoad() {
    const categories = mock.partCategories.map((c) => ({
      ...c,
      short: c.name.slice(0, 1),
      items: c.items.map((p) => ({ ...p, priceText: formatMoney(p.price) }))
    }))
    this.setData({ categories })
  },

  onReady() {
    // 测量右侧各分类区块位置
    setTimeout(() => this.measureSections(), 100)
  },

  /** 测量区块偏移，用于右侧滚动时反查分类 */
  measureSections() {
    const query = wx.createSelectorQuery().in(this)
    query.selectAll('.p-section').boundingClientRect()
    query.select('.prod-side').boundingClientRect()
    query.exec((res) => {
      const rects = res[0]
      const side = res[1]
      if (!rects || !side) return
      this._sectionTops = rects.map((r) => r.top - side.top)
    })
  },

  /** 点击左侧分类 → 右侧平滑滚动 */
  onCatTap(e) {
    const i = e.currentTarget.dataset.i
    this._tapLock = true
    this.setData({ activeCat: i, scrollInto: `sec-${i}` })
    setTimeout(() => { this._tapLock = false }, 500)
  },

  /** 右侧滚动 → 左侧分类跟随高亮 */
  onProdScroll(e) {
    if (this._tapLock || this._sectionTops.length === 0) return
    const top = e.detail.scrollTop + 40
    let idx = 0
    for (let i = 0; i < this._sectionTops.length; i++) {
      if (top >= this._sectionTops[i]) idx = i
      else break
    }
    if (idx !== this.data.activeCat) {
      this.setData({ activeCat: idx })
    }
  },

  /** 搜索：跨分类匹配名称 */
  onSearch(e) {
    const kw = e.detail.value.trim()
    if (!kw) {
      this.setData({ keyword: '', searchResults: [] })
      return
    }
    const lower = kw.toLowerCase()
    const results = []
    this.data.categories.forEach((c) => {
      c.items.forEach((p) => {
        if (p.name.toLowerCase().includes(lower)) results.push(p)
      })
    })
    this.setData({ keyword: kw, searchResults: results })
  },

  clearSearch() {
    this.setData({ keyword: '', searchResults: [] })
  },

  /** 电话咨询 */
  callService() {
    wx.makePhoneCall({ phoneNumber: mock.shop.phone, fail: () => {} })
  }
})
