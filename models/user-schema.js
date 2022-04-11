const mongoose = require("mongoose");

// 数据 schema (文档类型)
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

// model 对象
const User = mongoose.model("users", userSchema);

// 导出
module.exports = {
  User,
};
