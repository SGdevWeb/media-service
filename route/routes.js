const express = require('express');
const router = express.Router();
require('dotenv').config();
const controller = require('../controller/controler');
const pictureUpload = require('../uploadFile/uploadPicture');
// const technoController = require('../controller/technoController');

//router.post('/postavatar/image/:uuid/:username', pictureUpload.avatarUpload.single('image'), controller.postAvatarController);

router.get('/getavatar/:uuid', controller.avatar.getAvatarController);

router.get('/techno/:uuid', controller.techno.getTechno);

router.get('/techno', controller.techno.getAllTechno);

router.post('/techno/add' , controller.techno.postAddtechno);

router.put('/techno/put/:uuid' , controller.techno.putTechno);


module.exports = router;