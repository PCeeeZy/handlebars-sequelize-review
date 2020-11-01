// dpeendencies
const router = require('express').Router();
const burgersController = require('../../controllers/burgersController');

//     function(req, res) {
//     if (req.params.id) {
//         // get burger by id
//         burgersController.smashSpecificBurger(req, res)
//     }
//     // get all the available burgers
// }
//
//already at /api/burgers
router.route('/:id?')
    .get(burgersController.smashAllBurgs)
    // .post(burgersController.addBurger)
    // .put(burgersController.updBurger)
    // .delete(burgersController.delBuger);

module.exports = router;