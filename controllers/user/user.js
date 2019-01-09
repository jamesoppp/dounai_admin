const UserModel = require('./user.model')

/**
 *  返回数据格式
 */
const resObj = (code = 0, msg = '', token = '', data = []) => {
  return { code, msg, token, data }
}

/**
 *  新增用户
 */
const addUser = async (ctx, next) => {
  const addInfo = ctx.request.query
  console.log('addInfo', addInfo)
  if (!addInfo.username || !addInfo.password) {
    ctx.status = 200
    ctx.body = resObj(-1, '参数不全')
    return
  }
  let userObj = { username: addInfo.username }
  try {
    await UserModel.find(userObj).exec()
      .then((data) => {
        if (data.length !== 0) {
          ctx.body = resObj(2, '用户名已存在')
        } else {
          let addUser = new UserModel(addInfo)
          addUser.save()
          ctx.status = 200
          ctx.body = resObj(200, '注册成功')
        }
      })
  } catch (err) {
    ctx.body = resObj(0, '发生错误', err.toString())
  }
}

module.exports = {
  addUser
}
