const User= require('../models/user-model')



module.exports={

    loadHome:( req,res)=>{
      res.render('home-page')
    },

    loadLogin:(req,res)=>{
        res.render('login-page')
    },

    loadRegister:(req,res)=>{
        res.render('register-page')
    },


    saveUser:async(req,res)=>{

    // const username= req.body.name;
    // const useremail= req.body.email;
    // const userpassword = req.body.password;

    // console.log(username,useremail,userpassword);



    const newUser= new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password

    })

    await newUser.save();
    res.redirect("/login")

},


loginUser:async(req,res)=>{

    const useremail=req.body.email
    const userpassword=req.body.password


    const userDetails= await User.findOne({email:useremail})
    console.log(userDetails);
    req.session.user= userDetails

    if(userDetails.lenght<=0){
        res.redirect('/register')
    }
    else{

        if(userDetails.password===userpassword){
            res.redirect('/home')
        }
        else{
            res.redirect('/register')
        }
        
    }
    
},

logoutUser:(req,res)=>{
      req.session.user=''
      res.redirect('/login')

},

userHome:(req,res)=>{
    res.render('user-page')
}


}









































