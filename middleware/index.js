// to write data to files
var fs = require('fs');
// text file stream to save data to
var stream = fs.createWriteStream(__dirname + '/../participants.txt', {flags:'a'});

// set UNIX timestamp for the event in miliseconds
var eventTime = 1521167400000;
// set a event token here
var gameToken = "APPLEISDAKEY";

// export this object as index module
module.exports = {

    // render a given page with parameters
    renderWithParams: function (req, res, pageName, pageToRender, otherProps) {
        // create a object with the required details
        var pageDetails = {
            name: pageName,
            otherProps: otherProps
        };
        pageDetails.eventBegin = module.exports.checkEventBegin();
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
            stream.write(date.getHours()+':'+date.getMinutes()+'-'+date.getDate()+'.'+ date.getMonth()+'.'+date.getFullYear()+'\t'+req.body.name+'\t'+req.body.email+'\t'+req.body.phone+'\n');
            return res.json({success: true});
        }
    },

    // check if event has begun
    checkEventBegin: function(){
        return (Date.now() > eventTime);
    },

    // checks if token is valid
    checkToken: function(){
        // sanitize the data
        req.body.token = req.sanitize(req.body.token);
        if (!module.exports.checkEventBegin()){
            return res.json({success: false, error:"It's not the time yet."});
        } else {
            if (req.body.token === gameToken){
                return res.json({success: true, url:"/key/longlivetheking"});
            } else {
                return res.json({success: false, error:"No Sherlock, this is not the key."});
            }
        }
    },

    // sends the clue page
    sendCluePage: function(req, res){
        // check if event is active
        if (!module.exports.checkEventBegin()){
            return module.exports.renderWithParams(req, res, "To Soon", "error", {error1: "Its too soon to be here yet.", error2: "How did you end up here?"});
        } else {
            return module.exports.renderWithParams(req, res, "Clues", "clues");
        }
    }
}