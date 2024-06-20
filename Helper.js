const multer = require('multer');
const fs = require('fs');
const path = require('path');

const ImagePath = './images';

const ImagesStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (!fs.existsSync(ImagePath)) {
            fs.mkdirSync(ImagePath, { recursive: true }, (err) => { });
        }
        cb(null, ImagePath);
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    },
});

exports.storeSingleImage = multer({
    storage: ImagesStorage,
    limits: {
        fileSize: 1024 * 1024 * 1024,
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif)$/)) {
            return cb(new Error("Please upload an image!"), false);
        }
        cb(undefined, true);
    },
}).single("image");