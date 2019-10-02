const path = require('path');
const express = require('express');
const rootDir = require('../util/path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res) => {
  res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product'})
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
});

router.post('/add-product', (req, res) => {
  products.push(req.body);
  res.redirect('/');
});

module.exports.routes = router;
module.exports.products = products;
