/**
 * auth.js
 * @description :: express routes of authentication APIs
 */
  
const express =  require('express');
const router  =  express.Router();
const authController =  require('../../../controller/client/v1/authController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
router.route('/register').post(authController.register);
router.post('/send_login_otp',authController.sendOtpForLogin);
router.post('/login_with_otp',authController.loginWithOTP);
router.route('/logout').post(auth(PLATFORM.CLIENT), authController.logout);

module.exports = router;
