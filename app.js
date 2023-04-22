const { urlencoded } = require('body-parser')
const express= require('express')
const app= express()
const userRouter = require('./routes/user-router')
const database =require('./database/mongo-connection')
const session= require('express-session')


require('dotenv').config();


app.set('view engine','ejs')


app.use(express.json())
app.use(urlencoded({extended:false}))



app.use(function (req, res, next) {
    res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    next();
  });
  


const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));






app.use('/',userRouter)


app.listen(8080,()=>{
    console.log('server started on localhost:8080')
})