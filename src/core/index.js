/**
 * 扩展函数.
 */
Object.prototype.toFormat = (formatter = '', placeholder = '') => {
  if (!formatter && !placeholder) {
    return this.toString()
  }
}
