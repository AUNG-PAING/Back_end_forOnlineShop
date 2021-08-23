const router = require('express-promise-router')();
const { validateBody, validateToken, validateRole } = require('../utils/validator');
const { Schema } = require('../schemas/product');
const ProductControlle = require('../controllers/product');

router.post('/', [validateBody(Schema.save), validateToken(), validateRole('Owner')], ProductControlle.save);

module.exports = router;