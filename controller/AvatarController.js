const service = require('../service/services')
const path = require('node:path');

const postAvatarController = async (req, res) => {
    try {
        const result = await service.avatar.postAvatar(req);
        res.status(200).json({result: "oui"})
    } catch (error) {
        res.status(200).json({result: "non"})
    }
}

const getAvatarController = async (req, res) => {
    try {
        const file = await service.avatar.getAvatar(req.params.uuid);
        const dirname = path.dirname(__dirname);
        const fullPath = path.resolve(dirname,file.filepath);
        res.status(200).type(file.filetype).sendFile(fullPath)
    } catch (error) {
        console.log(error)
        res.status(200).json({result: "non"})
    }
}

module.exports = {
    postAvatarController,
    getAvatarController
}