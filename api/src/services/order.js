const Order = require("../models/order");
const User = require("../models/user");
const Product = require("../models/product");

const getOrders = () => Order.find().populate("user", "name");

const createOrderDb = (data, user) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  } = data;
  return new Order({
    orderItems: orderItems.map((item) => ({ ...item, product: item.id })),
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
    user,
  })
    .then((order) => order.save())
    .then((order) => order._doc)
    .catch((error) => {
      console.error(error);
      return error;
    });
};

const orderSummaryDb = () => {
  return Promise.all([
    Order.aggregate([
      {
        $group: {
          _id: null,
          numOrders: { $sum: 1 },
          totalSales: { $sum: "$totalPrice" },
        },
      },
    ]),
    User.aggregate([
      {
        $group: {
          _id: null,
          numUsers: { $sum: 1 },
        },
      },
    ]),
    Order.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          orders: { $sum: 1 },
          sales: { $sum: "$totalPrice" },
        },
      },
      { $sort: { _id: 1 } },
    ]),
    Product.aggregate([
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 },
        },
      },
    ]),
  ]).catch((error) => {
    console.error(error);
    return error;
  });
};

module.exports = {
  getOrders,
  createOrderDb,
  orderSummaryDb,
};
