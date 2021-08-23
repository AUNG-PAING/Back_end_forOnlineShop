const Helper = require('../utils/helper');
const router = require('express-promise-router')();
const GalleryDB = require('../models/gallery');

var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

var upload = multer({ storage: storage });


router.post("/file", upload.single('photo'), async (req, res, next) => {
    let path = `http://localhost:3000/${req.file.destination}${req.file.filename}`;
    let galleryData = {
        name: req.file.originalname,
        filename: req.file.filename,
        folder: req.file.destination,
        path: path
    };
    let saveGallery = new GalleryDB(galleryData);
    let result = await saveGallery.save();
    res.status(200).json(Helper.formatMsg(1, "Single File Upload", result));
});

router.post("/files", upload.array('photos'), async (req, res, next) => {

    let fileDatas = [];
    for (ind in req.files) {
        let file = req.files[ind]
        let path = `http://localhost:3000/${file.destination}${file.filename}`;
        let galleryData = {
            name: file.originalname,
            filename: file.filename,
            folder: file.destination,
            path: path
        };
        fileDatas.push(galleryData);
    }

    let result = await GalleryDB.collection.insertMany(fileDatas);

    res.status(200).json(Helper.formatMsg(1, "Muliple Images Upload Success", result));
});



router.get('/paginate/:skip', async (req, res, next) => {
    let result = await GalleryDB.find({}).limit(20).skip(Number(req.params.skip));
    let pageCount = await GalleryDB.countDocuments();
    res.status(200).json(Helper.formatMsg(1, `Image for Page ${req.params.skip}`, { result: result, count: pageCount }));
});

module.exports = router;