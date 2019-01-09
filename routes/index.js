const router = require('koa-router')()

/**
 * 用户模块
 */
const { addUser } = require('../controllers/user/user')
router.get('/user', addUser)

/**
 * 注册登录页
 */
const { login } = require('../controllers/login')
router.get('/login', login)

module.exports = router
