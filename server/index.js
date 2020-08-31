const express = require('express');
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// Database
require('../server/db/db');

// Settings
app.set('PORT', process.env.PORT || 8080);

// Routes
const productsRouter = require('./routes/products');
const ordersRouter = require('./routes/orders');

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Sessions

// Passport

// Api
app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);

app.listen(app.get('PORT'), () => {
    console.log(`Server on PORT: ${app.get('PORT')}`);
});