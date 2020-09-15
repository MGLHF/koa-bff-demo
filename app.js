const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const env = process.env.env_config

const config = require('./config')
const api = require('./api')
const output = require('./utils/output')

const auth = require('./middlewares/auth')
const cors = require('./middlewares/cors')

const index = require('./routes/index')
const demo = require('./routes/demo')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())

app.use(async (ctx, next) => {
  ctx.state = Object.assign(ctx.state || {}, config[env])
  ctx.api = Object.assign(ctx.api || {}, api)
  ctx.output = Object.assign(ctx.output || {}, output)
  await next()
})

// app.use(auth)
app.use(cors)

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(demo.routes(), demo.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

module.exports = app
