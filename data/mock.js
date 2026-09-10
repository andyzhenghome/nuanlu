/**
 * mock.js — 农村家用燃煤采暖炉商城 模拟数据
 * v1 全部为本地演示数据，后续可替换为云开发/后端接口
 */

// 首页轮播 Banner（渐变色块 + 文案，无图片依赖）
const banners = [
  { id: 'b1', title: '冬季采暖节', sub: '采暖炉直降 300 元，包送包装', bg: 'linear-gradient(120deg,#ff8a4c,#ff6b35)' },
  { id: 'b2', title: '以旧换新补贴', sub: '旧炉折价 200 元，上门拆装一步到位', bg: 'linear-gradient(120deg,#f59e0b,#ea7b12)' },
  { id: 'b3', title: '配件满减', sub: '烟囱暖气片满 500 减 80', bg: 'linear-gradient(120deg,#e0521b,#b23e0e)' }
]

/**
 * 采暖炉商品（4 款真实在售产品，照片见 /images/stoves/）
 * series: direct 普通直烧款 / gas 气化款
 * areaMin/areaMax: 适用面积区间（㎡）
 * rating: 好评评分（5 分制）
 * services: 服务标签
 * image: 商品照片路径
 */
const stoves = [
  { id: 's01', model: 'QH-80', name: '气化燃煤采暖炉 80型', series: 'gas',    power: 8, areaMin: 70, areaMax: 90,  area: '70-90㎡',  price: 800, sales: 326, rating: 4.8, hot: true,  tags: ['气化燃烧','80㎡'],   services: ['包邮'],         desc: '气化燃烧省煤高效，适用 70-90 ㎡房间，可接暖气片，封火过夜不熄灭。', image: '/images/stoves/气化炉_80.jpg' },
  { id: 's02', model: 'QH-60', name: '气化燃煤采暖炉 60型', series: 'gas',    power: 6, areaMin: 50, areaMax: 70,  area: '50-70㎡',  price: 600, sales: 412, rating: 4.7, hot: true,  tags: ['气化燃烧','60㎡'],   services: ['包邮'],         desc: '气化小户型款，适用 50-70 ㎡，燃烧充分不呛人，适合 1-2 间正房。',     image: '/images/stoves/气化炉_60.jpg' },
  { id: 's03', model: 'PT-40', name: '家用燃煤采暖炉 40型', series: 'direct', power: 4, areaMin: 30, areaMax: 50,  area: '30-50㎡',  price: 300, sales: 358, rating: 4.5, hot: false, tags: ['经济款','小户型'],  services: ['发物流·运费到付'], desc: '经济基础款，适用 30-50 ㎡单间，发货走物流运费到付，租房/临时房划算。', image: '/images/stoves/炉子_40.jpg' },
  { id: 's04', model: 'PT-60', name: '家用燃煤采暖炉 60型', series: 'direct', power: 6, areaMin: 50, areaMax: 70,  area: '50-70㎡',  price: 500, sales: 289, rating: 4.6, hot: true,  tags: ['实用款','60㎡'],    services: ['发物流·运费到付'], desc: '实用大功率款，适用 50-70 ㎡，带暖气片接口，发货走物流运费到付。',     image: '/images/stoves/炉子_60.jpg' }
]

// 配件耗材 — 8 大分类
const partCategories = [
  {
    id: 'c1', name: '烟囱管道',
    items: [
      { id: 'c1-1', name: '加厚不锈钢烟囱 1米', spec: '直径 12cm · 304不锈钢', price: 45, sales: 860 },
      { id: 'c1-2', name: '防倒风烟筒弯头', spec: '90°弯头 · 解决倒烟', price: 38, sales: 642 },
      { id: 'c1-3', name: '烟囱防雨帽', spec: '通用款 · 防雨防风', price: 25, sales: 520 },
      { id: 'c1-4', name: '烟囱加长管 0.5米', spec: '直径 12cm', price: 28, sales: 311 }
    ]
  },
  {
    id: 'c2', name: '暖气片',
    items: [
      { id: 'c2-1', name: '铸铁暖气片 四柱', spec: '每柱 · 老式耐用', price: 32, sales: 920 },
      { id: 'c2-2', name: '钢制散热器 60型', spec: '1.5米/组 · 散热快', price: 180, sales: 456 },
      { id: 'c2-3', name: '暖气片放气阀', spec: '黄铜 · 排气用', price: 8, sales: 1280 }
    ]
  },
  {
    id: 'c3', name: '水泵',
    items: [
      { id: 'c3-1', name: '家用暖气循环泵', spec: '200W 静音 · 自动', price: 168, sales: 534 },
      { id: 'c3-2', name: '管道增压泵', spec: '自动启停 · 大功率', price: 220, sales: 287 }
    ]
  },
  {
    id: 'c4', name: '循环泵',
    items: [
      { id: 'c4-1', name: '超静音屏蔽循环泵', spec: '320W · 适合120型以上', price: 260, sales: 342 },
      { id: 'c4-2', name: '循环泵温控开关', spec: '35-85℃ 可调', price: 45, sales: 498 }
    ]
  },
  {
    id: 'c5', name: '阀门管件',
    items: [
      { id: 'c5-1', name: '铜球阀 1寸', spec: '进出水总阀', price: 22, sales: 760 },
      { id: 'c5-2', name: 'PPR 水管 4米', spec: '热熔连接 · 耐压', price: 36, sales: 433 },
      { id: 'c5-3', name: '暖气片活接阀门', spec: '每组暖气片开关', price: 15, sales: 689 }
    ]
  },
  {
    id: 'c6', name: '密封材料',
    items: [
      { id: 'c6-1', name: '耐火水泥 2kg', spec: '炉膛修补专用', price: 18, sales: 572 },
      { id: 'c6-2', name: '耐高温密封绳', spec: '炉门专用 1米', price: 12, sales: 634 },
      { id: 'c6-3', name: '生料带 加厚', spec: '水管接口密封', price: 5, sales: 1500 }
    ]
  },
  {
    id: 'c7', name: '温控器',
    items: [
      { id: 'c7-1', name: '锅炉温度压力表', spec: '双显示 · 直观', price: 35, sales: 398 },
      { id: 'c7-2', name: '室内数显温控器', spec: '自动控泵 · 省煤', price: 58, sales: 267 }
    ]
  },
  {
    id: 'c8', name: '工具类',
    items: [
      { id: 'c8-1', name: '炉箅子 铸铁', spec: '通用 30cm', price: 28, sales: 445 },
      { id: 'c8-2', name: '炉门封火盖', spec: '加厚铸铁', price: 30, sales: 312 },
      { id: 'c8-3', name: '勾火棍+煤铲套装', spec: '三件套', price: 22, sales: 820 }
    ]
  }
]

// 已购炉子订单（仅"已签收"可预约安装）
const orders = [
  { id: 'ORD20260901', model: 'QH-80', name: '气化燃煤采暖炉 80型', status: '已签收', addr: '张家屯乡 幸福村 2 排 18 号', time: '2026-09-01' },
  { id: 'ORD20260825', model: 'PT-60', name: '家用燃煤采暖炉 60型', status: '已签收', addr: '李家洼镇 河东村 312 国道旁', time: '2026-08-25' },
  { id: 'ORD20260905', model: 'QH-60', name: '气化燃煤采暖炉 60型', status: '运输中', addr: '王家庄乡 永安村', time: '2026-09-05' }
]

// 安装服务保障
const guarantees = [
  '专业师傅上门安装，持证上岗',
  '安装后当场点火调试运行',
  '质保期内免费维修，随叫随到',
  '安装不满意可免费重约'
]

// 收费标准
const installFees = [
  { name: '基础安装', price: '免费', note: '购机含基础安装' },
  { name: '加长烟道', price: '¥30/米', note: '超过标配 2 米部分' },
  { name: '打孔费', price: '¥50/个', note: '墙体打孔穿管' },
  { name: '二楼及以上', price: '¥100/层', note: '楼层搬运附加费' }
]

// 安装进度节点
const installSteps = ['待接单', '师傅已接单', '师傅已出发', '安装中', '安装完成']

// 模拟师傅信息
const worker = { name: '王师傅', phone: '13800138000', rating: 4.9, orderCount: 1286 }

// 服务区域（乡镇示例）
const regions = ['本县城关镇', '张家屯乡', '李家洼镇', '王家庄乡', '河东堡镇', '清水河乡', '其他区域（电话确认）']

// 预约时间段
const timeSlots = ['今天下午', '明天上午', '明天下午', '后天上午', '本周六', '本周日']

module.exports = {
  banners,
  stoves,
  partCategories,
  orders,
  guarantees,
  installFees,
  installSteps,
  worker,
  regions,
  timeSlots
}
