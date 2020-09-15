module.exports = async (ctx, next) => {
  const allowHost = ['localhost:3000']
  const host = ctx.request.header.host
  if (allowHost.indexOf(host) > -1) {
    ctx.set('Access-Control-Allow-Origin', host)
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
    if (ctx.method == 'OPTIONS') {
      ctx.body = 200
    } else {
      await next() 
    }
  }
}