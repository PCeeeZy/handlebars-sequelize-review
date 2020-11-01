// dpeendencies
const router = require('express').Router();
const burgersController = require('../controllers/burgersController');

//     function(req, res) {
//     if (req.params.id) {
//         // get burger by id
//         burgersController.smashSpecificBurger(req, res)
//     }
//     // get all the available burgers
// }
//
router.route('/api/burgers/:id?')
    .get(req.params.id ? burgersController.smashSpecificBurger : burgersController.smashAllBurgs)
    .post(burgersController.addBurger)
    .update(burgersController.updBurger)
    .delete(burgersController.delBuger);

module.exports = router;