const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const Config = require('./config');
const EventModel = require("./model/Event");
const _ = require("lodash");

Config.init();
const Event = EventModel.get();

app.use(bodyparser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    Event.find().sort({ $natural: -1 }).limit(50).then((result) => {
        res.render("index", { events: result });
    });
});

app.get("/dashboard/new", (req, res) => {
    res.render("form");
});

app.get("/dashboard", (req, res) => {
    Event.find().then((result) => {
        res.render("list", { items: result });
    });
});

app.get("/dashboard/edit/:eventname", (req, res) => {
    const eventname = _.lowerCase(req.params.eventname);
    Event.find().then((result) => {
        result.forEach(function (event) {
            if (_.lowerCase(event.name) === eventname) {
                res.render("edit-form", { event: event });
            }
        });
        // res.render("404");
    });
});

app.get("/events/:eventname", (req, res) => {
    const eventname = _.lowerCase(req.params.eventname);
    Event.find().then((result) => {
        result.forEach(function (event) {
            if (_.lowerCase(event.name) === eventname) {
                res.render("index", { events: [event] });
            }
        });
    });
});

app.get("/events", (req, res) => {
    Event.find().then((result) => {
        res.render("events", { events: result });
    });
});

app.post("/new-event", (req, res) => {
    console.log(req.body);
    const newEvent = new Event({
        name: req.body.name,
        category: req.body.category,
        description: req.body.description,
        date: req.body.date,
        time: req.body.time,
        location: req.body.location,
    });

    newEvent.save(function (err) {
        if (err) { console.log(err); return; }
        console.log("Event added successfully!");
        res.redirect("/dashboard");
    });
});

app.post("/update-event", async function (req, res) {
    const formAction = req.body.formAction;
    const filter = {
        name: req.body.oldevent
    };

    if (formAction == "save") {

        const update = {
            name: req.body.name,
            category: req.body.category,
            description: req.body.description,
            date: req.body.date,
            time: req.body.time,
            location: req.body.location,
        };

        await Event.findOneAndUpdate({ name: req.body.oldevent.toString() }, update).then((result) => {
            console.log("Event updated successfully!");
            res.redirect("/dashboard");
        });

    } else if (formAction == "delete") {

        await Event.findOneAndDelete({ name: req.body.oldevent.toString() }).then((result) => {
            console.log("Event deleted successfully!");
            res.redirect("/dashboard");
        });

    }

});

app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running at PORT:3000");
});