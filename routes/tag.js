const router = require('express-promise-router')();
const TagController = require('../controllers/tag');
const { Schema } = require('../schemas/tag');
const { validateBody, validateToken, validateRole } = require('../utils/validator');

router.route('/')
    .post([validateBody(Schema.save), validateToken(), validateRole('Owner')], TagController.save)

router.route('/:id')
    .patch([validateToken(),validateRole('Owner')],TagController.patch)
    .delete([validateToken(),validateRole('Owner')],TagController.drop)

module.exports = router;