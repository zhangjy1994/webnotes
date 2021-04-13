// Promise ES6异步编程的一种解决方案
// Promise三种状态：pending(进行中)、resolved(已成功)、rejected(以失败)
let promise = new Promise((resolve, reject) => {
  // do something
  if (true) {
    // 将数据返回，供then方法使用
    resolve('value')
  } else {
    // 将数据返回，供then方法使用
    reject('error')
  }
})

