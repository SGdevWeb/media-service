const express = require('express');
const router = express.Router();
require('dotenv').config();
const controller = require('../controller/controller');
const pictureUpload = require('../uploadFile/uploadPicture')

router.post('/postavatar/image/:uuid/:username', pictureUpload.avatarUpload.single('image'), controller.postAvatarController);

router.get('/getavatar/:uuid', controller.getAvatarController);

module.exports = router;