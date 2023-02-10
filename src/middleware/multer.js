const multer  = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public/images')
    },
    filename: (req, file, callack) => {
        const timestamp = new Date().getTime();
        const fileName = file.originalname;
        // const ext = path.extname(file.originalname);
        callack(null, `${timestamp}-${fileName}`);
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 3 * 1000 * 1000 // 3 MB 
    }
});

module.exports = upload;