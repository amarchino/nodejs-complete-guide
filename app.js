const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use((req, res, next) => {
  console.log('This always runs!');
  next();
});

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000);
