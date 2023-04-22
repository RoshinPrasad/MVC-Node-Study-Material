module.exports={

    isLogged:(req,res,next)=>{
        if(req.session.user){
next()
        }else{
            res.redirect('/login')
        }

    },


    notLogged:(req,res,next)=>{
        if(!req.session.user){
            next()
        }else{
            res.redirect('/home')
        }
    }
}


