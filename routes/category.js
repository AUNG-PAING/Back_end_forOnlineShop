const router = require('express-promise-router')();
const { validateBody, validateToken, validateRole, validateParam } = require('../utils/validator');
const { Schema } = require('../schemas/category');
const { Gschema } = require('../schemas/global');
const CategoryController = require('../controllers/category');

router.post('/', [validateToken(), validateRole('Owner'), validateBody(Schema.create)], CategoryController.save);
router.route('/:id')
    .patch([validateParam(Gschema.id), validateToken(), validateRole('Owner')], CategoryController.patch)
    .delete(validateParam(Gschema.id), [validateToken(), validateRole('Owner')], CategoryController.drop)

module.exports = router;