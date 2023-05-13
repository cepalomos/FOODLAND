const {Router} = require('express');
const router = Router();
const products = require('./products');
const seed = require('./seedRoutes');
const user = require('./user');
const orders = require('./order');

router.use('/products',products);
router.use('/seed',seed);
router.use('/user',user);
router.use('/orders',orders)


module.exports = router;