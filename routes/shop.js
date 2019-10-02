const path = require('path');
const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('shop', {prods: adminData.products, pageTitle: 'Shop', path: '/', hasProducts: adminData.products.length > 0});
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
