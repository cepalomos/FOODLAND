const { Router } = require("express");
const {
  adminGetOrders,
  createOrder,
  orderSummary,
  orderFindId,
  orderUserId,
  orderPay,
  orderDeliver,
  orderDelete,
} = require("../controllers/order");
const { isAuth, isAdmin } = require("../middlewares/middlewares");
const router = Router();

router.route("/").get(isAuth, adminGetOrders).post(isAuth, createOrder);
router.route("/summary").get(isAuth, isAdmin, orderSummary);
router.route("/mine").get(isAuth, orderUserId);
router.route("/:id").get(isAuth, orderFindId).delete(isAuth,isAdmin,orderDelete);
router.route("/:id/pay").post(isAuth, orderPay);
router.route("/:id/deliver").put(isAuth, isAdmin, orderDeliver);

module.exports = router;
