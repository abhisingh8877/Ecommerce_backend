const fetchUser= async (req,res,next)=>{
    const token=req.header('auth-token');
   
    if(!token)
    {
        res.status(401).send({error:"Please authenticate using valid token"})

    }
    else
    {
        try{
            const data=jwt.verify(token,process.env.SECRET_KEY);
            req.user=data.user;
            next();
        }
        catch(error)
        {
            res.status(401).send({errors:"Please authenticate using a valid token"})
        }
    }
}
module.exports=fetchUser;