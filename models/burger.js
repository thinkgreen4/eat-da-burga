// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

//needs tweaking
var burger = {
   selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
   updateOne: function(objColVal, condition, cb) {
      orm.updateOne("burgers", objColVal, condition, cb);
    },
    insertOne: function(col, val, cb){
        orm.insertOne("burgers",col,val, function(res){
            cb(res);
        })

    }
    // delete: function(condition, cb) {
    //   orm.delete("cats", condition, function(res) {
    //     cb(res);
    //   });
    // }
  };

  module.exports = burger;