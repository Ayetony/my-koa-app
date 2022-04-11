const router = require("koa-router")();
const userCtl = require("../controller/user");

// 前缀访问
router.prefix("/users");

// ctx.params 路由参数查询  /:_id
router.get("/query/:_id", userCtl.userQuery);

// 删除
router.post("/del/:_id", userCtl.userDel);

// 更新
router.post("/update", userCtl.userUpdate);

// 添加
router.post("/add", userCtl.userAdd);

// 查询所有用户
router.post("/list", userCtl.userList);

module.exports = router;
