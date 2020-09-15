const router = require('koa-router')()
const controllers = require('../controllers/demo')

router.prefix('/demo')

router.get('/', controllers.test)

module.exports = router
