const { User } = require("../models/user-schema");
const daoUtil = require("./dao/daoUtil");

const userQuery = async (ctx) => {
  await daoUtil.query(User, { _id: ctx.params._id }, ctx);
};

const userDel = async (ctx) => {
  let _id = ctx.params._id;
  await daoUtil.del(User, { _id: _id }, ctx);
};

const userAdd = async (ctx) => {
  await daoUtil.add(User, ctx.request.body, ctx);
};

const userUpdate = async (ctx) => {
  await daoUtil.update(User, ctx.request.body, ctx);
};

const userList = async (ctx) => {
  console.log(ctx.request);
  await daoUtil.list(User, ctx);
};

module.exports = {
  userQuery,
  userDel,
  userAdd,
  userUpdate,
  userList,
};
