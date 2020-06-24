const mongoose = require("mongoose");

module.exports.init = function(){
    mongoose.connect("mongodb://localhost:27017/eventsDB", { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.set('useFindAndModify', false);
};