const express = require('express');
const path = require('path');
const mainRoutes = require('./routes/mainRoutes');

const app = express();

app.use(express.static( path.join (__dirname, '/public')));
app.use(mainRoutes)
app.set('view engine', 'ejs');


app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
})

app.get('/product-cart', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/productCart.html'))
})

app.get('/complete-purchase', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/complete-purchase.html'))
})

app.get('/product-detail', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/product-detail.html'))
})

app.get('/products-list', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/products-list.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
})

app.listen(3000, () => {
    console.log('Escuchando puerto 3000');
})
