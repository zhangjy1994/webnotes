const str = "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects?zn=utf&type=AAA&cb=&ad=&type=BBB&qw=123&type=BBB&name=%E5%90%8D%E5%AD%97&type=CCC"
function formatStr(str){
  const tempArr = str.split('?')[1].split('&')
  const tempArr2 = tempArr.map(item => item.split('='))
  let tempObj = {}
  tempArr2.forEach(item => {
    if (tempObj[item[0]] === undefined) {
      tempObj[item[0]] = item[1] === '' ? true : isNaN(item[1]) ? decodeURIComponent(item[1]) : Number(item[1])
    } else {
      if(![tempObj[item[0]]].flat().includes(item[1])){
        tempObj[item[0]] = [tempObj[item[0]], item[1]].flat()
      }
    }
  })
  console.dir(tempObj)
}
formatStr(str)