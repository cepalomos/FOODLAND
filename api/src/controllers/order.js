const { getOrders, createOrderDb,orderSummaryDb } = require("../services/order");

const adminGetOrders = (req, res, next) => {
  return getOrders()
    .then((orders) => res.status(200).json(orders))
    .catch((error) => next(error));
};

const createOrder = (req,res,next) => {
  const orderData = req.body;
  const userId = req.user._id;
  return createOrderDb(orderData,userId)
  .then((order)=>res.status(201).send({ message: "New Order Created", order }))
  .catch(error=>next(error));
}

const orderSummary = (req,res,next) => {
  return orderSummary()
  .then((info)=>res.status(200).json(info))
  .catch(error=>next(error));
}


module.exports = {
  createOrder,
  adminGetOrders,
  orderSummary,
};
