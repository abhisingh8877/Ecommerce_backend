const express=require('express');
const cors=require('cors');
const app=express();
const path=require('path');
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json({
    limit:"16kb"
}))
app.use(express.urlencoded({extended:true,limit:"16kb"}));
app.use('/images', express.static(path.join(__dirname, 'public/temp')));

module.exports= {app};