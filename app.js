const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const mongoose = require('mongoose')

const config = require('./config/config')
// const controller = require('./helpers/ctrl-middleware')
const routes = require('./routes')

const app = new Koa()

app.use(async (ctx, next) => {
  console.log(`requst ${ctx.request.method} ${ctx.request.url}`)
  await next()
})



app.use(bodyParser())
app.use(routes.routes())
// app.use(controller())

const dbOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: false,
  poolSize: 10
};
const dbUri = `mongodb://${config.mongo.host}:${config.mongo.port}/${config.mongo.db}`
console.log('mongo', dbUri)
mongoose.Promise = global.Promise
mongoose.connect(dbUri, dbOptions)
mongoose.connection.once('connected', function () {
  console.log('mongodb 连接成功')
})
mongoose.connection.on('error', () => {
  throw new Error(`连接错误: ${config.mongo.host}`)
})

app.listen(3006)
console.log('app started at http:127.0.0.1:3006')
