const Product = require('../models/product');

exports.getAddProduct = (req, res) => res.render('admin/add-product', {pageTitle: 'Add Product', path: '/admin/add-product'});
exports.postAddProduct = (req, res) => {
  const product = new Product(
    req.body.title,
    req.body.imageUrl,
    req.body.description,
    req.body.price
  );
  product.save();
  res.redirect('/');
};
exports.getProducts = (req, res) => Product.fetchAll(prods => res.render('admin/products', {prods, pageTitle: 'All Products', path: '/admin/products'}));
