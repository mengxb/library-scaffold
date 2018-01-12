/**
 * 获取当前时间
 *
 * @return {string} 当前时间
 */
export const getCurrentDate = function () {
  var d = new Date()
  var month = d.getMonth() + 1
  var day = d.getDate()
  month = month < 10 ? ('0' + month) : month
  day = day < 10 ? ('0' + day) : day
  return '/' + d.getFullYear() + '/' + month + '/' + day + ''
}
