const jwt=require('jsonwebtoken');


exports.authentication=function (req,res,next) {
    if (req.headers.authorization&&req.headers.authorization.startsWith('bearer')){
        const token=req.headers.authorization.split(' ')[1];

        if (token==null){
            res.sendStatus(401);
        }else {
            jwt.verify(token,"GHDFISUGHIUDFHSO",(error,user)=>{
                if (error){res.sendStatus(403);}else {req.user=user;next();}

            });
        }
    }else {
        res.sendStatus(401);
    }

}

exports.AdminAuthorization=function (req,res,next) {
    if (req.user.role==="admin"){
        next();
    }else {
        res.status(401).json({Message: "You are not authorized for this"});
    }
}