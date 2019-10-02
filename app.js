const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const expressHandlebar = require('express-handlebars');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.engine('hbs', expressHandlebar({
  defaultLayout: null
}));
// app.set('view engine', 'pug');
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

app.use((req, res) => {
  res.status(404)
    // .sendFile(path.join(__dirname, 'views', '404.html'));
    .render('404', {pageTitle: 'Page Not Found'});
});

app.listen(3000);
