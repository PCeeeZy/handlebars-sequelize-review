const router = require('express').Router();
const burgerRoutes = require('./burgers');

//already at /api
//real route here is oocalhost8080/api/burgers
router.use('/burgers', burgerRoutes);

// throw that catch all everywhere
router.use(function(req, res) {
    res.json({error: 'You are not authorized to be here'})
});

module.exports = router;