var express = require("express"),
    router = express.Router({ mergeParams: true }),
    midIndex = require("./middleware/index");

// NOTE: root in these are the route paths

// route the intro page
router.get("/", (req, res) => {
    midIndex.renderWithParams(req, res, "Welcome Sherlock Holmes", "intro");
});

// check if token is valid
router.post("/", midIndex.checkToken);

// route the participate
router.get("/participate", (req, res) => {
    midIndex.renderWithParams(req, res, "Participate - Shelock Holmes", "participate");
});

// route for participate post
router.post("/participate", midIndex.newParticipation);

// a participant has started, show intro message
router.get("/key/:key", midIndex.checkIfEventStarted, midIndex.checkKey, midIndex.sendEventStart);

// show user the clues
router.get("/key/:key/showClues", midIndex.checkIfEventStarted, midIndex.checkKey, midIndex.sendCluePage);

// routes for the diary
router.get("/key/:key/showClues/diarie", midIndex.checkIfEventStarted, midIndex.checkKey, midIndex.sendDiarie);

// routes for the phone
router.get("/key/:key/showClues/phone", midIndex.checkIfEventStarted, midIndex.checkKey, midIndex.sendPhone);

// route to check phone pin
router.post("/key/:key/showClues/phone/checkPIN", midIndex.checkIfEventStarted, midIndex.checkKey, midIndex.checkPIN);

// export route as module
module.exports = router;