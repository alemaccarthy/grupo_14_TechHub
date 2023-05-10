const express = require('express');
const path = require('path');
const app = express();

app.use(express.static( path.join (__dirname, '/public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.get('/home-1', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home-1.html'))
})

app.get('/home-2', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home-2.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
})

app.get('/productCart', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/productCart.html'))
})

app.get('/completePurchase', (req, res) => {
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
