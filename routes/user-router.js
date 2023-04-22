const express=require('express')
const router= express()
const userController = require('../controllers/user-controller')
// const session=require(./)

router.get('/',userController.loadHome)
router.get('/login',userController.loadLogin)
router.get('/register',userController.loadRegister)
router.get('/logout',userController.logoutUser)
router.get('/home',userController.userHome)


router.post('/login',userController.loginUser)
router.post('/register',userController.saveUser)

module.exports= router

