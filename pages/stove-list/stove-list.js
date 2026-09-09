// pages/stove-list/stove-list.js — 燃煤采暖炉列表（系列筛选 + 排序 + 面积筛选 + 分页）
const mock = require('../../data/mock')
const { formatMoney } = require('../../utils/format')

const SERIES_TABS = [
  { key: 'all', label: '全部' },
  { key: 'direct', label: '直烧款' },
  { key: 'gas', label: '气化款' }
]

const SORT_OPTIONS = [
  { key: 'default', label: '综合推荐' },
  { key: 'sales', label: '销量' },
  { key: 'rating', label: '好评' },
  { key: 'price', label: '价格' }
]

// 面积区间（min/max，单位 ㎡）
const AREA_OPTIONS = [
  { key: 'all', label: '全部面积', min: 0, max: 9999 },
  { key: 'a1', label: '50-80㎡', min: 50, max: 80 },
  { key: 'a2', label: '80-120㎡', min: 80, max: 120 },
  { key: 'a3', label: '120-160㎡', min: 120, max: 160 },
  { key: 'a4', label: '160㎡以上', min: 160, max: 9999 }
]

const PAGE_SIZE = 4

Page({
  data: {
    seriesTabs: SERIES_TABS,
    sortOptions: SORT_OPTIONS,
    areaOptions: AREA_OPTIONS.map((o) => ({ key: o.key, label: o.label })),
    seriesFilter: 'all',
    sortBy: 'default',
    priceDir: 'asc',        // 价格排序方向，点一次切一次
    priceArrow: '↑',
    areaFilter: 'all',
    areaLabel: '按面积',
    keyword: '',
    focus: false,
    list: [],
    page: 1,
    hasMore: true,
    loading: false,
    areaPanelShow: false
  },

  onLoad(options) {
    if (options.focus) this.setData({ focus: true })
    this.reload()
  },

  onKeyword(e) {
    this.setData({ keyword: e.detail.value })
    this.reload()
  },

  clearKeyword() {
    this.setData({ keyword: '' })
    this.reload()
  },

  onSeriesTap(e) {
    this.setData({ seriesFilter: e.currentTarget.dataset.key })
    this.reload()
  },

  /** 排序：价格项重复点击切换升降序 */
  onSortTap(e) {
    const key = e.currentTarget.dataset.key
    if (key === 'price' && this.data.sortBy === 'price') {
      const dir = this.data.priceDir === 'asc' ? 'desc' : 'asc'
      this.setData({ priceDir: dir, priceArrow: dir === 'asc' ? '↑' : '↓' })
    } else {
      this.setData({
        sortBy: key,
        priceDir: 'asc',
        priceArrow: key === 'price' ? '↑' : ''
      })
    }
    this.reload()
  },

  /** 面积筛选面板 */
  openAreaPanel() {
    this.setData({ areaPanelShow: true })
  },
  closeAreaPanel() {
    this.setData({ areaPanelShow: false })
  },
  noop() {},

  onAreaPick(e) {
    const key = e.currentTarget.dataset.key
    const opt = AREA_OPTIONS.find((o) => o.key === key)
    this.setData({
      areaFilter: key,
      areaLabel: key === 'all' ? '按面积' : opt.label,
      areaPanelShow: false
    })
    this.reload()
  },

  resetArea() {
    this.setData({ areaFilter: 'all', areaLabel: '按面积', areaPanelShow: false })
    this.reload()
  },

  /** 筛选 + 排序条件变化 → 重置分页 */
  reload() {
    this.setData({ page: 1, list: [], hasMore: true })
    this._allFiltered = this.buildFiltered()
    this.loadPage()
  },

  /** 计算过滤+排序后的完整列表（本地模拟服务端） */
  buildFiltered() {
    const { keyword, seriesFilter, sortBy, priceDir, areaFilter } = this.data
    const kw = keyword.trim().toLowerCase()
    const area = AREA_OPTIONS.find((o) => o.key === areaFilter)

    let list = mock.stoves.filter((s) => {
      if (kw && !(s.model.toLowerCase().includes(kw) || s.name.toLowerCase().includes(kw))) return false
      if (seriesFilter !== 'all' && s.series !== seriesFilter) return false
      // 面积区间有交集即展示
      if (s.areaMax < area.min || s.areaMin > area.max) return false
      return true
    })

    switch (sortBy) {
      case 'price':
        list = list.slice().sort((a, b) => priceDir === 'asc' ? a.price - b.price : b.price - a.price)
        break
      case 'sales':
        list = list.slice().sort((a, b) => b.sales - a.sales)
        break
      case 'rating':
        list = list.slice().sort((a, b) => b.rating - a.rating)
        break
      default:
        list = list.slice().sort((a, b) => Number(b.hot) - Number(a.hot) || b.sales - a.sales)
    }
    return list
  },

  /** 加载一页（模拟异步） */
  loadPage() {
    if (this.data.loading || !this.data.hasMore) return
    this.setData({ loading: true })
    setTimeout(() => {
      const start = (this.data.page - 1) * PAGE_SIZE
      const slice = this._allFiltered.slice(start, start + PAGE_SIZE)
        .map((s) => ({
          ...s,
          priceText: formatMoney(s.price),
          seriesLabel: s.series === 'gas' ? '气化款' : '直烧款'
        }))
      const merged = this.data.list.concat(slice)
      this.setData({
        list: merged,
        loading: false,
        hasMore: merged.length < this._allFiltered.length
      })
    }, 300)
  },

  /** 上拉触底加载下一页 */
  onReachBottom() {
    if (!this.data.hasMore) return
    this.setData({ page: this.data.page + 1 })
    this.loadPage()
  },

  goDetail(e) {
    wx.navigateTo({ url: `/pages/detail/detail?id=${e.currentTarget.dataset.id}` })
  }
})
