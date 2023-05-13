const {Router} = require('express');
const {adminGetOrders,createOrder,orderSummary} = require('../controllers/order');
const router = Router();

router.route('/').get(adminGetOrders).post(createOrder);
router.route("/summary").get(orderSummary);


module.exports = router;