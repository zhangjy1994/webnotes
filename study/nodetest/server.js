const express = require('express')
const app = express()
const path = require('path')
const port = 3000

 // 按顺序执行脚本，静态资源会拦截同路径接口
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/a', (req, res) => {
  res.send('a')
})

app.get('/b', (req, res) => {
  res.send('b')
})

app.use((req, res, next) => {
  // res.status(404).send("Sorry can't find that!")
  res.redirect('404.html')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// 启动热更新 nodemon ./server.js