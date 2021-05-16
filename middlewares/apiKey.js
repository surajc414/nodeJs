function apiKey(req,res,next){

    if(req.query.apiKey=='1234')
    next();
    else
    res.json({message:'Not Allowed'});
}

module.exports=apiKey;