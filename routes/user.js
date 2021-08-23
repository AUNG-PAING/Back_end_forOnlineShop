const router = require('express-promise-router')();
const UserController = require('../controllers/user');
const { Gschema } = require('../schemas/global');
const { validateBody, validateParam, validateToken, validateRole } = require('../utils/validator');

router.route('/:id')
    .delete([validateParam(Gschema.id, "id"), validateRole('Owner')], UserController.drop);

module.exports = router;

/*
    Gallery
*/