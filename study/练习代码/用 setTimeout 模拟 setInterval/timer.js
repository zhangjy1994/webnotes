// 1.写一个 interval 方法
let timer = null
interval(func, wait){
  let interv = function(){
    func.call(null);
    timer=setTimeout(interv, wait);
  };
  timer= setTimeout(interv, wait);
}
// 2.和 setInterval() 一样使用它
interval(function() {}, 20);
// 3.终止定时器
if (timer) {
  window.clearTimeout(timer);
  timer = null;
}