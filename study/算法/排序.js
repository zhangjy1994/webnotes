var arr=[10,20,9,8,79,65,100];
// 冒泡
// for (let i = 0; i < arr.length - 1; i++ ) {
//   for (let j = 0; j < arr.length - 1 - i; j ++) {
//     if(arr[j] > arr [j + 1]) {
//       let temp = arr[j]
//       arr[j] = arr[j + 1]
//       arr[j + 1] = temp
//     }
//   }
// } 
// console.log(arr)

// 快排
// function quickArr(arr) {
//   if (arr.length <= 1) {
//     return arr
//   }
//   let leftArr = [], rightArr = [];
//   const pIndex = Math.floor(arr.length / 2)
//   const p = arr.splice(pIndex, 1)[0]
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] <= p) {
//       leftArr.push(arr[i])
//     } else {
//       rightArr.push(arr[i])
//     }
//   }
//   return quickArr(leftArr).concat(p, quickArr(rightArr))
//   // return [...quickArr(leftArr),p,...quickArr(rightArr)]
// }

// console.log(quickArr(arr))

// 插入排序
function insertArr(arr) {
  const newArr = []
  newArr.push(arr[0])
  for (let i = 1; i < arr.length; i++) {
    for (let j = newArr.length - 1; j >= 0; j--) {
      if (arr[i] > newArr[j]) {
        newArr.splice(j+1, 0, arr[i])
        break
      }
      if (j === 0) {
        newArr.unshift(arr[i])
      }
    }
  }
  return newArr
}
console.log(insertArr(arr))