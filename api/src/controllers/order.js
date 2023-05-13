const {
  getOrders,
  createOrderDb,
  orderSummaryDb,
  orderFindIdDb,
  orderUserIdDb,
  orderPayDb,
  orderDeliverDb,
  orderDeleteDb,
} = require("../services/order");

const adminGetOrders = (req, res, next) => {
  return getOrders()
    .then((orders) => res.status(200).json(orders))
    .catch((error) => next(error));
};

const createOrder = (req, res, next) => {
  const orderData = req.body;
  const userId = req.user._id;
  return createOrderDb(orderData, userId)
    .then((order) =>
      res.status(201).send({ message: "New Order Created", order })
    )
    .catch((error) => next(error));
};

const orderSummary = (req, res, next) => {
  return orderSummaryDb()
    .then((info) => res.status(200).json(info))
    .catch((error) => next(error));
};
const orderUserId = (req, res, next) => {
  const id = req.user._id;
  return orderUserIdDb(id)
    .then((orders) => res.json(orders))
    .catch((error) => next(error));
};
const orderFindId = (req, res, next) => {
  const id = req.params.id;
  return orderFindIdDb(id).then((order) => {
    if (order) res.json(order);
    else throw { status: 404, message: "Order Not Found" };
  });
};
const orderPay = (req, res, next) => {
  const id = req.params.id;
  const data = req.body;
  return orderPayDb(id, data)
    .then((order) => res.status(201).json(order))
    .catch((error) => next(error));
};
const orderDeliver = (req,res,next) => {
  const id = req.params.id;
  return orderDeliverDb(id)
  .then((order)=>res.status(200).json({message:"Order Delivered",data:order}))
  .catch(error=>next(error));
};
const orderDelete = (req, res, next) => {
  const id = req.params.id;
  return orderDeleteDb(id)
  .then(order=>res.status(200).json({message:"Order Deleted",data:order}))
  .catch(next)
};


module.exports = {
  createOrder,
  adminGetOrders,
  orderSummary,
  orderFindId,
  orderUserId,
  orderPay,
  orderDeliver,
  orderDelete,
};
