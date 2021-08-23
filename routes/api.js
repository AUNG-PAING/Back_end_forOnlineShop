const router = require('express-promise-router')();
const UserController = require('../controllers/user');
const CategoryController = require('../controllers/category');
const TagController = require('../controllers/tag');
const ProductController = require('../controllers/product');

const { Schema } = require('../schemas/user');
const { Gschema } = require('../schemas/global');
const { validateBody, validateParam, validateToken, validateRole } = require('../utils/validator');

router.post('/register', validateBody(Schema.register), UserController.register);
router.post('/add', [validateToken(), validateRole('Owner')], UserController.add);
router.post('/login', validateBody(Schema.login), UserController.login);
router.get('/user/:id', [validateParam(Gschema.id,"id"), validateToken()], UserController.detail);


router.get('/categories', CategoryController.paginate);
router.get('/category/:id', CategoryController.get);

router.get('/tags', TagController.all);
router.get('/tag/:id',validateParam(Gschema.id,"id") ,TagController.get);

router.get('/products/:skip',validateParam(Gschema.skip,'skip'), ProductController.paginate)
router.get('/product/:id',validateParam(Gschema.id,"id"),ProductController.get)

module.exports = router;

/*
    Gallery
*/