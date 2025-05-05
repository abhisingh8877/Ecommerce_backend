const multer=require('multer');
const path = require("path");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/temp')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      const ext=path.extname(file.originalname) // this will file extension name from original file name
      cb(null, file.fieldname + '-' + uniqueSuffix+ext)
    }
  })
  
 const upload = multer({ storage: storage })
 module.exports={upload};
