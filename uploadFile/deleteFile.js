const fs = require('fs');
const { promisify } = require('util');
const unlinkAsync = promisify(fs.unlink);

const deleteFile = async (filepath) => {
   await unlinkAsync(filepath).then((res)=>{

   }).catch((err) => {
      
   })
}
module.exports = deleteFile