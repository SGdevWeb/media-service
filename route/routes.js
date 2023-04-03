const express = require('express');
const router = express.Router();
require('dotenv').config();
const controller = require('../controller/controler');
const pictureUpload = require('../uploadFile/uploadPicture')

router.post('/postavatar/image/:uuid/:username', pictureUpload.avatarUpload.single('image'), controller.postAvatarController);

router.get('/getavatar/:uuid', controller.avatar.getAvatarController);

module.exports = router;