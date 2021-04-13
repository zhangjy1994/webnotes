// 防抖
function debounce (fn, delay = 200) {
  let timer
  return function (...args) {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      fn.apply(this,args)
    }, delay)
  }
}
// eg
dom.addEventListener('mousemove', debounce(function () {
  // todo someting
}))


// 节流
function throttle (fn, interval = 200) {
  let last, timer
  return function () {
    const args = arguments
    const now = +new Date()
    if (last && now - last < interval) {
      clearTimeout(timer)
      timer = setTimeout (() => {
        last = now
        fn.apply(this, args)
      }, interval)
    } else {
      last = now
      fn.apply(this, args)
    }
  }
}