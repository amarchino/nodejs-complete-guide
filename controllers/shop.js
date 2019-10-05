const Product = require('../models/product');

exports.getProducts = (req, res) => Product.fetchAll(prods => res.render('shop/product-list', {prods, pageTitle: 'All Products', path: '/products'}));
exports.getIndex = (req, res) => Product.fetchAll(prods => res.render('shop/index', {prods, pageTitle: 'Shop', path: '/'}));
exports.getCart = (req, res) => res.render('shop/cart', {pageTitle: 'Cart', path: '/cart'});
exports.getCheckout = (req, res) => res.render('shop/checkout', {pageTitle: 'Checkout', path: '/checkout'});
