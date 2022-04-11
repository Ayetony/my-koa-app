/**
 *
 * 返回 Promise 对象
 * nodeJS 默认支持 commonJS
 *
 * ***/
const query = (model, where, ctx) => {
  return model
    .findOne(where)
    .then((rel) => {
      ctx.body = {
        code: 200,
        data: rel,
      };
    })
    .catch((err) => {
      ctx.body = {
        code: 400,
        msg: "查询异常",
      };
    });
};

const list = (model, ctx) => {
  return model
    .find({})
    .then((rel) => {
      ctx.body = {
        code: 200,
        data: rel,
      };
    })
    .catch((err) => {
      ctx.body = {
        code: 400,
        msg: "查询异常",
      };
    });
};

const del = (model, where, ctx) => {
  return model
    .findOneAndDelete(where)
    .then((rel) => {
      ctx.body = {
        code: 200,
        data: rel,
      };
    })
    .catch((err) => {
      ctx.body = {
        code: 400,
        msg: "删除异常",
      };
    });
};

const update = (model, where, ctx) => {
  return model
    .updateOne(
      { _id: where._id },
      { username: where.username, password: where.password }
    )
    .then((rel) => {
      ctx.body = {
        code: 200,
        data: rel,
      };
    })
    .catch((err) => {
      ctx.body = {
        code: 400,
        msg: "更新异常",
      };
    });
};

const add = (model, where, ctx) => {
  return model
    .create(where)
    .then((resolve) => {
      if (resolve) {
        ctx.body = {
          code: 200,
          msg: "添加成功",
          data: resolve,
        };
      } else {
        ctx.body = {
          code: 300,
          msg: "添加失败",
        };
      }
    })
    .catch((err) => {
      ctx.body = {
        code: 400,
        msg: "添加异常",
      };
    });
};

module.exports = {
  query,
  add,
  update,
  del,
  list,
};
