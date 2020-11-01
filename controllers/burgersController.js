// communicates with db

const db = require('./models');

module.exports = {
//functionality of this controller
    //Get all the burgers
    smashAllBurgs: function(req, res) {   
        // db.Burger.find({}).then(function(dbBurgerData) {res.json(dbBurgerData)})

    },
    // Get burger by id
    smashSpecificBurger: function(req, res) {

    },
    // Add burger
    addBurger: function(req, res) {

    },
    // DEL burger
    delBuger: function(req, res) {

    },
    // UPD  burger
    updBurger: function(req,res) {

    }
};