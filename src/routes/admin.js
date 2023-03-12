const router = require('express').Router();
const { admin } = require('../controllers/adminController');
const accessAdmin = require('../middlewares/accessAdmin');
router
    .get('/', accessAdmin, admin)



module.exports = router;