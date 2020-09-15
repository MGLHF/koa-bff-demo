module.exports = {
  async test (ctx) {
    const { page = 1, pageSize = 10 } = ctx.request.query
    const { api, output } = ctx
    try {
      const result = await api.demo.getTouTiaoData(ctx, { page, pageSize })
      if (result.data && result.data.code === 200) {
        const { list, total } = result.data.data
        ctx.body = output.success(list, { total })
      } else {
        ctx.body = output.error('获取数据失败')
      }
    } catch (error) {
      ctx.body = output.error(error)
    }
  }
}