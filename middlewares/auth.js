module.exports = async (ctx, next) => {
  if (ctx.request.header['sso-token']) {
    await next()
  } else {
    ctx.response.status = 401
    ctx.output.error('无效的token，无权限')
  }
}