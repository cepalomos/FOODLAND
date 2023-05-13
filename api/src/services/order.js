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


const orderUserIdDb=(id)=>{
  return Order.find({user:id});
};

const orderFindIdDb = (id) => {
  return Order.findById(id)
};
const orderPayDb = (id,payment) => {
  return Order.findById(id)
  .then(order=>{
    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = payment;
      return order.save();
    }
    else{
      throw {status:404,message:"Order Not Found"}
    }
  })
};
const orderDeliverDb = (id) =>{
  return Order.findById(id)
  .then(order=>{
    if(order){
      order.isDelivered =true;
      order.deliveredAt = Date.now();
      return order.save();
    }
    else throw {status:404,message:"Order Not Found"}
  })
};
const orderDeleteDb = (id) => {
  return Order.findById(id)
  .then(order=>{
    if(order){
      return order.update({active:false})
    }
    else throw {status:404,message:"Order Not Found"}
  })
};

module.exports = {
  getOrders,
  createOrderDb,
  orderSummaryDb,
  orderUserIdDb,
  orderFindIdDb,
  orderPayDb,
  orderDeliverDb,
  orderDeleteDb,
};
