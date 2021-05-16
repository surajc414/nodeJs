const router = require('express').Router();
const apiKeyMiddleware = require('../middlewares/apiKey.js');

router.get('/product',(req,res)=>{


    res.render('products',{title:'Product Page'});
    
});

module.exports = router;

