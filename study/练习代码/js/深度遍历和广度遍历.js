// 1.深度优先遍历的递归写法
function deepTraversal(node) {
  let nodes = []
  if (node != null) {
    nodes.push[node]
    let childrens = node.children
    for (let i = 0; i < childrens.length; i++) {
      deepTraversal(childrens[i])
    }
  }
  return nodes
}
// 2.广度优先遍历的递归写法
function wideTraversal(node) {
  let nodes = [],
  i = 0
  if (node != null) {
    nodes.push(node)
    wideTraversal(node.nextElementSibling)
    node = nodes[i++]
    wideTraversal(node.firstElementChild)
  }
  return nodes
}

// 输出：
// [{key: 'abc', value: 1}, {key: 'ad', value: [1,2]}, {key: 'e', value: 's'}]
var a = {
  a: {
    b: {
      c: 1
    }, 
    d: [1,2]
  }, 
  e: 's'
}

/**
 * 
 * @param {*初始化obj} obj 
 * @param {*每次遍历传递的key值} initKey 
 * @returns 
 */

function formatObj (obj, initKey = '') {
  let arr = []
  for (let key in obj) {
    let targetKey = initKey + key
    if (Object.prototype.toString.call(obj[key]).slice(8, -1) === "Object") {
      var arr2 = formatObj(obj[key], targetKey)
      arr = [...arr, ...arr2]
    } else {
      arr.push({key: targetKey, value: obj[key]})
    }
  }
  return arr
}

var result = formatObj(a)
console.log(result)