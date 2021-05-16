

const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const userRouters = require('./routes/userRouters.js');
const productRouters = require('./routes/productRouters.js');

app.set('view engine','ejs');
app.use(userRouters);
app.use(productRouters);


app.listen(PORT,()=>{
    console.log(`Listening the port on ${PORT}`);
});