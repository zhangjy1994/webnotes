## Vue 2.0/3.0双向数据绑定的实现原理
* ES5: Object.defineProperty
``` html
<body>
  姓名：<span id="spanName"></span>
  <br>
  <input id="inputName">
  <script>
    let obj = {
      name: ''
    }
    let newObj = JSON.parse(JSON.stringify(obj))
    Object.defineProperty(obj, 'name', {
      get() {
        return newObj.name
      },
      set(val) {
        if (val === newObj.name) return
        newObj.name = val
        observe()
      }
    })
    funciton observe(){
      spanName.innerHTML = obj.name
      inputName.value = obj.name
    }
    inputName.oninput = function () {
      obj.name = this.value
    }
  </script>
</body>
```
* ES6: Proxy
``` html
<body>
  姓名：<span id="spanName"></span>
  <br>
  <input id="inputName">
  <script>
    let obj = {
      name: ''
    }
    obj = new Proxy(obj, {
      get(target, prop) {
        return target[prop]
      },
      set(target, prop, value) {
        target[prop] = value
        observe()
      }
    })
    funciton observe(){
      spanName.innerHTML = obj.name
      inputName.value = obj.name
    }
    inputName.oninput = function () {
      obj.name = this.value
    }
  </script>
</body>
```