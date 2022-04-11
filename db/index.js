const mongoose = require("mongoose");

// connect 函数返回 Promise
module.exports = async () => {
  await mongoose
    // 居然不能使用 localhost 字符串
    .connect("mongodb://127.0.0.1:27017/jianshu", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Mongo 连接成功");
    })
    .catch((err) => {
      console.log("连接失败:", err);
    });
};
