/**
 * lang module.
 */

 /** 空对象 */
export const emptyObject = Object.freeze({})

/**
 * 判断是否未定义.
 */
export const isUndef = (v) => {
  return v === undefined || v === null
}

/**
 * 判断是否定义.
 */
export const isDef = (v) => {
  return v !== undefined && v !== null
}

/**
 * 判断是否true.
 */
export const isTrue = (v) => {
  return v === true
}

/**
 * 判断是否false.
 * @name isFalse
 */
export const isFalse = (v) => {
  return v === false
}

/**
 * 判断是否为对象.
 * @name isObject
 */
export const isObject = (v) => {
  return v !== null && typeof v === 'object'
}

/**
 * 判断是否为字符串.
 */
export const isString = (v) => {
  return typeof v === 'string'
}

/**
 * 空方法.
 */
export const noop = (v = {}) => {
  return v
}
