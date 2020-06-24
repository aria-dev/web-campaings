const mongoose = require("mongoose");
const localDBURL = "mongodb://localhost:27017/eventsDB";
const atlasDBURL = "mongodb+srv://admin:pass@dbtestcluster-gsvam.mongodb.net/eventsDB?retryWrites=true&w=majority";
module.exports.init = function(){
    mongoose.connect(atlasDBURL, { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.set('useFindAndModify', false);
};