/**
 * format.js — 通用工具：金额格式化、智能选炉推荐
 */

/** 金额显示：1280 -> "1280"，98.5 -> "98.5" */
function formatMoney(n) {
  const v = Number(n) || 0
  return v % 1 === 0 ? String(v) : v.toFixed(1)
}

/**
 * 智能选炉：按取暖面积推荐合适功率的炉子
 * 农村平房保温一般，按 1kW 带 9-11㎡ 估算，取足功率
 * @param {number} area 取暖面积（㎡）
 * @param {array} stoves 炉子列表（需含 power）
 * @returns {object} { needPower, list }
 */
function pickByArea(area, stoves) {
  const needPower = Math.ceil((Number(area) || 0) / 10)
  // 推荐功率 >= 需求，且最接近的优先（功率冗余不超过 40%）
  const list = stoves
    .filter((s) => s.power >= needPower)
    .sort((a, b) => a.power - b.power)
  return { needPower, list }
}

module.exports = { formatMoney, pickByArea }
