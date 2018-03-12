// start typed to start automatically adding new data
function startTyped() {
    var typed = new Typed("#textBox", {
        strings: ["Hello Sherlock,<br><br>Where have you been?<br><br>We've been trying to reach you since forever.<br><br>Nevermind, time is of essence now and we are in grave danger and need your help.<br><br>Two days ago, we discovered a dead body, and on searching through his appartment, we found about his links with Moriarty.<br><br>Our intelligence suggests that Moriaty is planning to disrupt Sammailan 2K18.<br><br>You must find and stop him, before any more casualities can take place.<br><br>Good luck, Sherlock."],
        typeSpeed: 50,
        cursor: false
    });
}

$(document).ready(function () {
    startTyped();
})