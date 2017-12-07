const Koa = require('koa')
const server = new Koa()
const static = require('koa-static')
// const debug = require('debug')('koa-weserver-demo')
// const response = require('./middlewares/response')
// const bodyParser = require('./middlewares/bodyparser')
// const config = require('./config')

server.use(static(__dirname));
// 使用响应处理中间件
//server.use(response)

// 解析请求体
//server.use(bodyParser())

// 引入路由分发
//const router = require('./routes')
//server.use(router.routes())

// 启动程序，监听端口
server.listen(3000, function () {
	console.log("...... server listening on port 3000 ......");
})
