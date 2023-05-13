const Product = require('../models/product');

const getProductsDb = (id) => {
  if(!id) return Product.find();
  return Product.findById(id)
};

const productsDbSave = (product) => {
  const {
    name,
    slug,
    image,
    price,
    category,
    brand,
    stock,
    rating,
    numReviews,
    description,
    imageCategory,
  } = product;
  const newProduct = new Product({
    name,
      slug,
      image:
        image ??
        "https://thumbs.dreamstime.com/z/concepto-creativo-de-la-comida-abstracta-con-la-col-y-el-pe-40423196.jpg",
      price,
      category,
      brand,
      stock,
      rating: rating ?? 0,
      numReviews: numReviews ?? 0,
      description,
      imageCategory:
        imageCategory ??
        "https://jumboargentina.vtexassets.com/arquivos/ids/537347-800-auto?v=636972888517500000&width=800&height=auto&aspect=true",
  })
  return newProduct.save();
}

const productUpdate = (productApi,id) => {
  const {
    name,
    slug,
    price,
    image,
    images,
    category,
    brand,
    stock,
    description,
    rating,
    numReviews,
    imageCategory,
  } = productApi
  return Product.findById(id)
  .then(product=>{
    if (product) {
      product.name = name ?? product.name;
      product.slug = slug ?? product.slug;
      product.price = price ?? product.price;
      product.image = image ?? product.image;
      product.images = images ?? product.images;
      product.category = category ?? product.category;
      product.brand = brand ?? product.brand;
      product.stock = stock ?? product.stock;
      product.description = description ?? product.description;
      product.rating = rating ?? product.rating;
      product.numReviews = numReviews ?? product.numReviews;
      product.imageCategory = imageCategory ?? product.imageCategory;
      return product.save();
    }else{
      throw {status:404,message:"Product Not Found"}
    }
  }).catch(error=>error);
}

const productReviewDb = (id,user,review) =>{
  return Product.findById(id)
  .then(product=>{
    if(!product){
      throw {status:404,message:"Product Not Found"};
    }else{
      if(product.reviews.some(({name})=>name === user)) throw {status:400,message:"You already submitted a review"};
      const newReview = {
        name:user,
        ...review,
      };
      product.reviews.push(newReview);
      product.numReviews = product.reviews.length;
      product.rating = product.reviews.reduce((revies,product)=>product.rating + revies,0)/product.numReviews
      return product.save();
    }
  })
  .then(product=>product.reviews[product.reviews.length - 1]);
};


module.exports = {
  getProductsDb,
  productsDbSave,
  productUpdate,
  productReviewDb,
};