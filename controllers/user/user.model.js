const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  password: String,
  meta: {
    createTime: {
      type: Date,
      default: Date.now()
    },
    updateTime: {
      type: Date,
      default: Date.now()
    }
  }
})

// UserSchema.pre('save', function (next) {

// })

UserSchema.statics = {
  get(id) {
    return this.findById(id)
      .exec()
      .then((user) => {
        if (user) return user
        return Promise.reject('用户不存在！');
      })
  },
  list({ skip = 0, limit = 50 } = {}) {
    return this.find()
      .sort({ createTime: -1 })
      .skip(+skip)
      .limit(+limit)
      .exec()
  }

}
module.exports = mongoose.model('User', UserSchema);
