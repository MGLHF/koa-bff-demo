const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  ctx.body = {
    title: 'Hello Koa 2!' + ctx.state.service_host
  }
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
