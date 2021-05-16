const router = require('express').Router();
const apiKeyMiddleware = require('../middlewares/apiKey.js');


router.get('/',(req,res)=>{
    
    res.render('index',{  
        title:'Home Page',
    });
    
    
});
router.get('/about',(req,res)=>{
    
    res.render('about',{
        title:'About Us',
    });
    
    
});
router.get('/contact',(req,res)=>{
    
    res.render('contact',{
        title:'Contact Us',
    });
    
    
});

router.get('/api/products',apiKeyMiddleware,(req,res)=>{ 

    res.json([
        {
        id:'1',
        product_category:'Mobile',
        address:'Narauli',
        },
        {
            id:'2',
            product_category:'Laptop',
            address:'Narauli',
            },
            {
                id:'3',
                product_name:'charger',
                address:'Narauli',
                },
                {
                    id:'4',
                    product_name:'Home Theater',
                    address:'Narauli',
                },
                    {
                        id:'5',
                        product_name:'Boofer',
                        address:'Narauli',
                    },

    ]);
});


module.exports = router;