const mongoose = require("mongoose");

const eventScnema = {
    name: String,
    category: String,
    description: String,
    date: String,
    time: String,
    location: String,
}

const Event = mongoose.model("Event", eventScnema);

module.exports.get = function(){
    return Event;
};