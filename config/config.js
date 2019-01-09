// https://github.com/motdotla/dotenv
// 根据 .env 文件配置环境变量
require('dotenv').config()

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3030,
  mongooseDebug: process.env.NODE_ENV === 'development' ? true : false,
  jwtSecret: process.env.JWT_SECRET,
  mongo: {
    host: process.env.MONGO_HOST || '127.0.0.1/movi',
    port: process.env.MONGO_PORT || 27017,
    db: process.env.MONGO_DB_NAME

  }
}
module.exports = config
