const {getProductsDb, productsDbSave, productUpdate, productReviewDb} = require('../services/products');

const getProducts = (req,res,next)=>{
  getProductsDb()
  .then(products=>res.json(products))
  .catch(error=>next(error))
};

const postProducts = async(req,res,next) => {
  const productBody = req.body;
  try {
    const product = await productsDbSave(productBody);
    res.json({message:"Product Created",product});
  } catch (error) {
    next(error);
  }
};

const putProduct = (req,res,next) => {
  const {id} = req.params;
  productUpdate(req.body,id)
  .then(product=>res.json({message:"Product Updated",data:product}))
  .catch(error=>next(error));
}

const getSlug = (req,res,next) => {
  const {id} = req.params;
  getProductsDb(id)
  .then(product=>{
    if(!product){
      return next({status:404,message:"No se encontro el item"})
    }
    return res.json(product)
  })
  .catch(error=>next(error))
}
const createReviews = (req,res,next) => {
  const id = req.params.id;
  const user = req.user.name;
  const review = req.body;
  return productReviewDb(id,user,review)
  .then(review=>res.status(201).json({message:"Review Created",review}))
  .catch(next);

}; 

module.exports = {
  getProducts,
  postProducts,
  putProduct,
  getSlug,
  createReviews,
}