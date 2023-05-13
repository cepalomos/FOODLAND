const {Router} = require('express');
const router = Router();
const {getProducts,postProducts,putProduct,getSlug, createReviews} = require('../controllers/products')
const {getCategories} = require('../controllers/categories');
const { isAuth, isAdmin } = require('../middlewares/middlewares');

router.route("/").get(getProducts).post(isAuth,isAdmin,postProducts);
router.route('/categories').get(getCategories);
router.route('/:id').put(isAuth,isAdmin,putProduct);
router.route('/slug/:id').get(isAuth,getSlug);
router.route("/:id/reviews").post(isAuth,createReviews);

module.exports = router;
