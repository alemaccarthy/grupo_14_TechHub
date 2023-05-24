const express = require('express');
// const path = require('path'); 
const mainRoutes = require('./routes/mainRoutes');
const cartRoutes = require('./routes/cartRoutes');
const productsRoutes = require('./routes/productsRoutes');
const usersRoutes = require('./routes/usersRoutes');
const methodOverride = require('method-override');

const app = express();

app.use(express.static('public'));
app.use(mainRoutes);
app.use(cartRoutes);
app.use(productsRoutes);
app.use(usersRoutes);
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
// app.set('views', [path.join(__dirname, '/views/complete-purchase.ejs')]) //PREGUNTAR

app.listen(3000, () => {
    console.log('🎧 Escuchando puerto 3000 🎧');
})
