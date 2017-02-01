# vue-shoppingCar
a vue shoppingCar demo

#### 注意：
1. 因为构建时疏忽，目前版本没有form提交功能，ajax请求不友好，有需求的同学请自行修改或等待新版本
2. 类名和html的实现没有参考imooc教程，对于有该方面需求的同学请绕行

###使用步骤

1. clone仓库
```git
 git clone git@github.com:luoyin1994/vue-shoppingCar.git
 #or
 git clone https://github.com/luoyin1994/vue-shoppingCar.git
```

2. npm安装支持（对于还不知道npm的同学请自行google或baidu学习）
```npm
 npm i  
```

3. 打开layout.jade,依次找到public目录下的link引用文件jade版本，并编译
```jade
 html
   head
     meta(charset='utf-8')
     block head
     link(rel="stylesheet" href="/style/reset.css")
     link(rel="stylesheet" href="/style/main.css")
     link(rel="stylesheet" href="/font/fonts/font.css")
     link(rel="stylesheet" href="/style/mixin/bg-color.css")
     block style
   body
     block container
     block script
```

4. 在根目录下执行index.js文件
```node
 node app.js 
```

5. 打开浏览器，输入
```url
 http://localhost:3000
```
然后就可以看到页面了


