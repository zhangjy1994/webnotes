### 第1题：写 React/Vue 项目时为什么要在列表组件中写key，其作用是什么？
>key是给每一个vnode的唯一id，可以依靠key，更精准、更快的拿到oldVnode中对应的vnode节点
### 第2题：['1', '2', '3'].map(parseInt) what & why ?
>[1, NaN, NaN] => arr.map(callback:(value:T, index: number, arrary: T[])),parseInt(string, radix:解析时的基数),parseInt是用来解析字符串的，使字符串成为指定基数的整数。parseInt('1', 0) //radix为 0 时，且string参数不以'0x'和 '0'开头时，按照10为基数处理，这个时候返回1；parseInt('2',, 0) //基数为1(1进制)表示的数中，最大值小于2，所以无法解析，返回NaN。
### 第3题：什么是防抖和节流？有什么区别？如何实现？
>防抖=>触发高频事件后 n 秒后函数只会执行一次，如果 n 秒内高频事件再次被触发，则重新计算时间
>节流=>高频事件触发，但在 n 秒内只只会执行1次，所以节流会稀释函数的执行频率
### 第4题：介绍下Set、Map、WeakSet和WeakMap的区别
>Set=>对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用
>WeakSet=>成员都是对象；成员都是弱引用，可以被垃圾回收机制回收，可以用来保存DOM节点，不容易造成内存泄漏
>Map=>本质上是键值对的集合，类似集合；可以遍历，方法很多，可以跟各种数据格式转换
>WeakMap=>只接受对象最为键名（null除外），不接受其他类型的值作为键名；键名是弱引用，键值可以是任意的，键名所指向的对象可以被垃圾回收，此时键名是无效的；不能遍历，方法有get、set、has、delete
### 第5题：介绍下深度优先遍历和广度优先遍历，如何实现？
>深度优先遍历=>是指从某个顶点出发，首先访问这个顶点，然后找出刚访问的这个结点的第一个未被访问的邻结点，然后再以此邻结点为顶点，继续找它的下一个顶点进行访问。重复此步骤，直至所有结点都被访问完为止。
>广度优先遍历=>是从某个顶点触发，首先访问这个定点，然后找出刚访问这个结点所有未被访问的邻结点，访问完后再访问这些结点中第一个邻结点的所有结点，重复此方法，直到所有结点都被访问完为止。
```
// 1.深度优先遍历的递归写法
// 2.深度优先遍历的非递归写法
// 3.广度优先遍历的递归写法
```
### 第6题：请分别用深度优先思想和广度优先思想实现一个拷贝函数？
### 第7题：ES5/ES6的继承除了写法以外还有什么区别？
>1.ES5的继承实质上是先创建子类的实例对象，然后再将父类的方法添加到this上（Parent.apply(this)）。
>2.ES6的继承机制完全不同，实质上是先创建父类的实例对象this（所以必须先调用父类的super()方法），然后再用子类的构造函数修改this
>3.ES5的继承是通过原型或构造函数机制来实现。
>4.ES6通过class关键字定义类，里面有构造方法，类之间通过extends关键字实现继承
>5.子类必须在constructor方法中调用super方法，否则新建实例报错。因为子类没有自己的this对象，而是继承了父类的this对象，然后对其进行加工。如果不调用super方法，子类得不到this对象。
>6.注意super关键字指代父类的实例，即父类的this对象。
>7.注意：在子类构造函数中，调用super后，才可以使用this关键字，否则报错。