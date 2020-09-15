const axios = require('axios')
module.exports = {
  async getTouTiaoData (ctx, query) {
    const { state } = ctx
    return await axios({
      url: state.service_host,
      method: 'get',
      params: query,
    })
  }
}