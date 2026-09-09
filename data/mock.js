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
 * 采暖炉商品
 * series: direct 直烧款 / gas 气化款
 * areaMin/areaMax: 适用面积区间（㎡）
 * rating: 好评评分（5 分制）
 * services: 服务标签
 */
const stoves = [
  { id: 's01', model: 'NL-80',  name: '家用燃煤采暖炉 80型', series: 'direct', power: 8,  areaMin: 60,  areaMax: 90,  area: '60-90㎡',   price: 1280, sales: 326, rating: 4.8, hot: true,  tags: ['封火12小时'], services: ['包邮','包安装'], desc: '适合 2-3 间正房，带暖气片接口，封火过夜不熄灭。' },
  { id: 's02', model: 'NL-100', name: '家用燃煤采暖炉 100型', series: 'direct', power: 10, areaMin: 90,  areaMax: 130, area: '90-130㎡',  price: 1580, sales: 289, rating: 4.7, hot: true,  tags: ['大料口','省煤'], services: ['包邮','包安装'], desc: '加大料仓，一次添煤烧 8 小时，适合北方四合院。' },
  { id: 's03', model: 'NL-120', name: '气化燃煤采暖炉 120型', series: 'gas', power: 12, areaMin: 120, areaMax: 160, area: '120-160㎡', price: 1880, sales: 218, rating: 4.9, hot: true,  tags: ['双水套','升温快'], services: ['包邮','包安装'], desc: '气化燃烧省煤 30%，双水套热效率高，带循环泵接口。' },
  { id: 's04', model: 'NL-150', name: '气化燃煤采暖炉 150型', series: 'gas', power: 15, areaMin: 160, areaMax: 220, area: '160-220㎡', price: 2380, sales: 156, rating: 4.8, hot: false, tags: ['大面积','商用家用'], services: ['包邮','包安装'], desc: '适合二层小楼或小型超市、村委会大面积供暖。' },
  { id: 's05', model: 'NL-200', name: '气化燃煤采暖炉 200型', series: 'gas', power: 20, areaMin: 220, areaMax: 300, area: '220-300㎡', price: 2980, sales: 98,  rating: 4.6, hot: false, tags: ['养殖场推荐'], services: ['包邮','包安装'], desc: '大炉膛厚钢板，养殖场、仓库大面积供暖首选。' },
  { id: 's06', model: 'NL-60',  name: '家用燃煤采暖炉 60型', series: 'direct', power: 6,  areaMin: 40,  areaMax: 60,  area: '40-60㎡',   price: 980,  sales: 412, rating: 4.7, hot: true,  tags: ['小户型','经济款'], services: ['包邮'], desc: '单间/老年房经济实用，安装简单当天用。' },
  { id: 's07', model: 'NL-130', name: '气化燃煤采暖炉 130型', series: 'gas', power: 13, areaMin: 130, areaMax: 170, area: '130-170㎡', price: 2680, sales: 134, rating: 4.9, hot: false, tags: ['新款','静音'], services: ['包邮','包安装'], desc: '新款气化炉，燃烧无烟不呛人，适合靠近卧室的房间。' },
  { id: 's08', model: 'NL-70',  name: '家用燃煤采暖炉 70型', series: 'direct', power: 7,  areaMin: 50,  areaMax: 70,  area: '50-70㎡',   price: 880,  sales: 358, rating: 4.5, hot: false, tags: ['入门款'], services: ['包邮'], desc: '入门经济款，一炉带 3-4 组暖气片，租房/临时房划算。' }
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
  { id: 'ORD20260901', model: 'NL-100', name: '家用燃煤采暖炉 100型', status: '已签收', addr: '张家屯乡 幸福村 2 排 18 号', time: '2026-09-01' },
  { id: 'ORD20260825', model: 'NL-80', name: '家用燃煤采暖炉 80型', status: '已签收', addr: '李家洼镇 河东村 312 国道旁', time: '2026-08-25' },
  { id: 'ORD20260905', model: 'NL-150', name: '气化燃煤采暖炉 150型', status: '运输中', addr: '王家庄乡 永安村', time: '2026-09-05' }
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
