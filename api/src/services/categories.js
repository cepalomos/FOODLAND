const Product = require('../models/product');

const getCategoriesDb = () => {
  return Product.aggregate([
    {
      $group: {
        _id: "$category",
        imageCategory: { $first: "$imageCategory" },
      },
    },
  ]);
};

module.exports = {
  getCategoriesDb,
}