const express = require('express');
const path = require('path');
const mainRoutes = require('./routes/mainRoutes');
const cartRoutes = require('./routes/cartRoutes');
const usersRoutes = require('./routes/productsRoutes');

const app = express();

app.use(express.static( path.join (__dirname, '/public')));
app.use(mainRoutes);
app.use(cartRoutes);
app.use(usersRoutes);

app.set('view engine', 'ejs');


app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
})

app.listen(3000, () => {
    console.log('Escuchando puerto 3000');
})
