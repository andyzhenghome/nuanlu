/**
 * mock.js — 农村家用燃煤采暖炉商城 模拟数据
 * v1 全部为本地演示数据，后续可替换为云开发/后端接口
 */

// 首页轮播 Banner（渐变色块 + 文案，无图片依赖）
const banners = [
  { id: 'b1', title: '冬季采暖节', sub: '采暖炉直降 300 元，包送包装', bg: 'linear-gradient(120deg,#ff8a4c,#ff6b35)' },
  { id: 'b2', title: '以旧换新补贴', sub: '旧炉折价 200 元，上门拆装一步到位', bg: 'linear-gradient(120deg,#f59e0b,#ea7b12)' }
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

// 店铺/品牌信息
const shop = {
  brand: '慧明水暖',
  address: '山东省淄博市桓台县唐山镇波扎店村',
  contact: '郑建华',
  phone: '13370691721'
}

module.exports = {
  banners,
  stoves,
  shop
}
