#library scaffold
Used to build javascript library for Both Browser and Node

##How to use in browser
```html
<html>
  <body>
    <script src="library.js"></script>
  </body>
</html>
```

## How to use in Node
```javascript
import {something} from 'library.js'
```


## npm scripts
```shell
npm run dev // 启动测试服务页面
npm run build:dev // 构建非压缩版本
npm run build:prod // 构建压缩版本
npm run test //执行测试用例
```


## How to write test spec
> [点击参考date.spec.js](./test/date.spec.js)
