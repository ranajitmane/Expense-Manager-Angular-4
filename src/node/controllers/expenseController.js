/**================================================================ 
            History Of The File 
    Author          - Ranajit Mane 
    purpose         - Writing - Expense Related APIs Operation handling
==================================================================== **/
let async = require("async");
let crypto = require('crypto');
let Expense = require("../model/expense.js");
let config = require("../config/config.json");
let error = require("../config/error.json");

module.exports = {
    listExpense: function(req, res) {

        ///api/customers/:id
        Expense.find({ }, function(err, expense) {
            if (err) {
                console.log(err);
                return res.status(400).send({ status: false, message: globalError.DATABASE_PROCESS })
            }
            // delete user['password'];
            return res.status(200).send({ status: true, data: expense });
        });
    },
    saveExpense : function(req, res) {
        // console.log(req.body)
        var newExpense = new Expense(req.body);
        console.log(req.body)
  
        // save the User
        newExpense.save(function(err) {
            if (err)
            return res.status(400).send({ status: false, message: globalError.DATABASE_PROCESS })
            return req.res.status(200).send({status:true, data: newExpense});
        });
    },
}