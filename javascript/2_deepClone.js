/**
 * 深拷贝
 * @param {Object} obj 
 */
function deepClone(obj = {}, cache = []) {
  // null 或 不是对象和数组 直接返回
  if(typeof obj !== 'object' || obj == null) {
    return obj
  }

  console.log('-----------')
  console.log(cache)
  
  // 如果传入的对象与缓存的相等, 则递归结束, 这样防止循环
  /**
   * var a = {b:1}
   * a.c = a
   */
  const hit = cache.filter(c => c.original === obj)[0]
  if (hit) {
    return hit.copy
  }

  const copy = Array.isArray(obj) ? [] : {}
  cache.push({
    original: obj,
    copy
  })
  Object.keys(obj).forEach(key => {
    copy[key] = deepClone(obj[key], cache)
  })

  return copy
}

module.exports = deepClone