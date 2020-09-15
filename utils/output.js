module.exports = {
  success: (data, other = {}) => {
    return { errorno: 1, errmsg: '成功', data, ...other }
  },
  error: (err, other = {}) => {
    return { errorno: 0, errmsg: '失败', err, ...other }
  }
}