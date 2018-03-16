// to write data to files
var fs = require('fs');
// text file stream to save data to
var stream = fs.createWriteStream(__dirname + '/../participants.txt', { flags: 'a' });

var extData = require("./phonedata");

// set UNIX timestamp for the event in miliseconds
 var eventTime = new Date("2018-03-16 22:00:00.0");
//var eventTime = 0;
// set a event token here
var gameToken = "imgoingin";
// set phone pin here
var phonePIN = 14031997;
// export this object as index module
module.exports = {

    // render a given page with parameters
    renderWithParams: function (req, res, pageName, pageToRender, otherProps) {
        // create a object with the required details
        var pageDetails = {
            name: pageName,
            otherProps: otherProps
        };
        pageDetails.eventBegin = module.exports.checkEventBeginBoolean();
        // render the page
        return res.render(pageToRender, { pageDetails: pageDetails });
    },

    // save a new participation
    newParticipation: function (req, res) {
        // sanitize all the data
        req.body.name = req.sanitize(req.body.name);
        req.body.email = req.sanitize(req.body.email);
        req.body.phone = req.sanitize(req.body.phone);
        // check if data is valid
        if (!(/^([a-zA-Z][a-zA-Z0-9\s]*)$/.test(req.body.name))) {
            return res.json({ success: false, error: "Please check the full name" });
        } else if (!(/^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$)$/.test(req.body.email))) {
            return res.json({ success: false, error: "Please check your email address" })
        } else if (!(/^([0-9]{10,10})$/.test(req.body.phone))) {
            return res.json({ success: false, error: "Invalid phone number" });
        } else {
            // save the user
            // get date
            var date = new Date(Date.now());
            stream.write(date.getHours() + ':' + date.getMinutes() + '-' + date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear() + '\t' + req.body.name + '\t' + req.body.email + '\t' + req.body.phone + '\n');
            return res.json({ success: true });
        }
    },

    // check if event has begun
    checkEventBeginBoolean: function () {
        return (Date.now() > eventTime);
    },

    // checks if token is valid
    checkToken: function (req, res) {
        // sanitize the data
        req.body.token = req.sanitize(req.body.token);
        if (!module.exports.checkEventBeginBoolean()) {
            return res.json({ success: false, error: "It's not the time yet." });
        } else {
            if (req.body.token == gameToken) {
                return res.json({ success: true, url: "/key/" + gameToken });
            } else {
                return res.json({ success: false, error: "No Sherlock, this is not the key." });
            }
        }
    },

    // sends the clue page
    sendEventStart: function (req, res) {
        req.params.key = req.sanitize(req.params.key);
        return module.exports.renderWithParams(req, res, "Clues", "eventStart", { key: req.params.key });
    },

    // check if event has started, if not render error page
    checkIfEventStarted: function (req, res, next) {
        // check if event is active
        if (!module.exports.checkEventBeginBoolean()) {
            return module.exports.renderWithParams(req, res, "To Soon", "error", { error: "Its too soon to be here yet."});
        } else {
            next();
        }
    },

    // check if user using correct key
    checkKey: function (req, res, next) {
        // sanitize key
        req.params.key = req.sanitize(req.params.key);
        if (req.params.key === gameToken) {
            next();
        } else {
            return module.exports.renderWithParams(req, res, "Invalid Key", "error", { error: "Invalid key used. <br>How did you end up here>" });
        }
    },

    // send the clue page
    sendCluePage: function (req, res) {
        return module.exports.renderWithParams(req, res, "The Clues", "clueList", { key: req.params.key });
    },

    // send the diary clue
    sendDiarie: function (req, res) {
        return module.exports.renderWithParams(req, res, "Victim's Diarie", "clues/diarie", { key: req.params.key });
    },

    // send the victim phone
    sendPhone: function (req, res) {
        return module.exports.renderWithParams(req, res, "Victim's Phone", "clues/phone", { key: req.params.key });
    },

    // check if PIN is valid
    checkPIN: function (req, res) {
        // sanitize the pin
        req.body.pin = req.sanitize(req.body.pin);
        if (req.body.pin == phonePIN) {
            var data = {
                success: true,
                messages: extData.messages,
                phoneLogs: extData.phoneLogs,
                notes: extData.notes
            }
            return res.json(data);
        } else {
            return res.json({ success: false, error: "Incorrect PIN" });
        }
    }
}