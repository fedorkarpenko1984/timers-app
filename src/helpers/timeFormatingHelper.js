export function timeFormatingHelper(time) {
  function transformValue(value) {
    if (value === 0) return '00'
    if (value.toString().length === 1) return '0' + value
    return value.toString()
  }

  let hours = 0
  let minutes = 0
  if (time >= 3600) {
    hours = Math.floor(time / 3600)
    time = time - hours * 3600
  }
  if (time >= 60) {
    minutes = Math.floor(time / 60)
    time = time - minutes * 60
  }
  if (hours > 0) return hours + ':' + transformValue(minutes) + ':' + transformValue(time)
  if (minutes > 0) return minutes + ':' + transformValue(time)
  return `${time}`
}