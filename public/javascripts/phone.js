// current active menu item
var menuItem = 0;
var activePhoneItem = 0;
var activeNoteItem = 0;
var phoneLogs = [
    {
        name: 'asdasdad',
        time: 'asdasdasd',
        type: 'missed'
    },
    {
        name: 'asdasdad',
        time: 'asdasdasd',
        type: 'picked'
    },
    {
        name: 'asdasdad',
        time: 'asdasdasd',
        type: 'dialed'
    },
    {
        name: 'asdasdad',
        time: 'asdasdasd',
        type: 'missed'
    },
    {
        name: 'asdasdad',
        time: 'asdasdasd',
        type: 'dialed'
    },
];

var notes = [
    {
        date: '10:10 12/21/21',
        note: ' asdf asf asdf sdf sad fsadf sad fasd f asdf asdf'
    },
    {
        date: '10:10 12/21/21',
        note: ' asdf asf asdf sdf sad fsadf sad fasd f asdf asdf'
    },
    {
        date: '10:10 12/21/21',
        note: ' asdf asf asdf sdf sad fsadf sad fasd f asdf asdf'
    },
    {
        date: '10:10 12/21/21',
        note: ' asdf asf asdf sdf sad fsadf sad fasd f asdf asdf'
    }
]

// staets drawing the main menu
function showMenuScreen() {
    // unbind previous bindins
    unbindButtons();
    drawMenu();
    // bind buttons
    $('#up').click(function() {
        if (menuItem > 0)
            menuItem--;
        drawMenu();
    });
    $('#down').click(function() {
        if (menuItem < 2)
            menuItem++;
        drawMenu();
    });
    $('#ok').click(function() {
        gotoSubMenu();
    });
}

function unbindButtons(){
    $('#up').off('click');
    $('#down').off('click');
    $('#ok').off('click');
    $('#back').off('click');
}

function gotoSubMenu() {
    if (menuItem === 0){
        openPhoneApp();
    } else if (menuItem ===1 ){
        drawMessages();
    } else if (menuItem === 2){
        openNoteApp();
    }
}

// opens the notes app
function openNoteApp(){
    unbindButtons();
    // set the first note active
    activeNoteItem = 0;
    // set up buttons
    $('#up').click(function() {
        if (activeNoteItem > 0)
            activeNoteItem--;
        drawNotes();
    });
    $('#down').click(function() {
        if (activeNoteItem < notes.length-1)
            activeNoteItem++;
        drawNotes();
    });
    $('#back').click(function() {
        showMenuScreen();
    });
    $('#ok').click(function() {
        openOneNote();
    });    
    // draw the notes app
    drawNotes();
}

// draw the notes app
function drawNotes(){
    $('#content').html('');
    var newPhoneContent = "";
    for (var x=0; x<notes.length;x++){
        newPhoneContent = newPhoneContent + '<div class="note ';
        if (x === activeNoteItem){
            newPhoneContent = newPhoneContent + 'screenItemActive '
        }
        newPhoneContent = newPhoneContent +'"><div class="time">'+notes[x].date+'</div><div class="noteText">'+notes[x].note+'</div></div>';
    };
    $('#content').html(newPhoneContent);
    //scroll to active log
    $('#content').scrollTop($('.screenItemActive').offset().top - $('#content').offset().top);  
}

// displays the phone app
function openPhoneApp(){
    unbindButtons();
    // set the first item as active
    activePhoneItem = 0;
    // set up buttons
    $('#up').click(function() {
        if (activePhoneItem > 0)
            activePhoneItem--;
        drawPhone();
    });
    $('#down').click(function() {
        if (activePhoneItem < phoneLogs.length-1)
            activePhoneItem++;
        drawPhone();
    });
    $('#back').click(function() {
        showMenuScreen();
    });    
    // draw the phone
    drawPhone();
}

// draw the phone logs screen
function drawPhone(){
    $('#content').html('');
    var newPhoneContent = "";
    for (var x=0; x<phoneLogs.length;x++){
        newPhoneContent = newPhoneContent + '<div class="phoneItem ';
        if (x === activePhoneItem){
            newPhoneContent = newPhoneContent + 'screenItemActive '
        }
        newPhoneContent  = newPhoneContent + phoneLogs[x].type + '"> <div class="contact">'+phoneLogs[x].name+'</div><div class="details"><span class="time">'+phoneLogs[x].time+'</span></div></div>';
    };
    $('#content').html(newPhoneContent);
    //scroll to active log
    $('#content').scrollTop($('.screenItemActive').offset().top - $('#content').offset().top);
}

function drawMenu() {
    if (menuItem === 0) {
        $('#content').html('<div class="menuEntry activeMenu">Phone</div><div class="menuEntry">Messages</div><div class="menuEntry">Notes</div>')
    } else if (menuItem === 1) {
        $('#content').html('<div class="menuEntry">Phone</div><div class="menuEntry  activeMenu">Messages</div><div class="menuEntry">Notes</div>')
    } else if (menuItem === 2) {
        $('#content').html('<div class="menuEntry">Phone</div><div class="menuEntry">Messages</div><div class="menuEntry  activeMenu">Notes</div>')
    }
}

function checkPIN() {
    if ($("#pinBox").val() == '') {
        return showPIError("Enter a PIN");
    }
    $("#phoneBtn").prop("disabled", true);
    var phoneData = {
        pin: $("#pinBox").val()
    }
    $.ajax({
        type: 'POST',
        url: '/key/' + key + '/showClues/phone/checkPIN',
        data: phoneData,
        dataType: 'json',
        encode: true
    }).done(function (data) {
        if (data.success) {
            $('#ok').attr('onclick', '');
            return showMenuScreen();
        } else {
            $("#pinBox").val("");
            showPIError(data.error);
        }
        // enable the button
        $("button").prop("disabled", false);
    });
}

// show an error
function showPIError(daError) {
    $('#error').text(daError);
    $("#errorBar").css("height", "10%");
    setTimeout(function () {
        $("#errorBar").css("height", "0%");
    }, 5000);
}

$(document).ready(function () {
    $('#ok').attr('onclick', 'checkPIN();');
    $("#pinBox").on('keyup', function (e) {
        if (e.keyCode == 13) {
            checkPIN();
        }
    });
    // bind buttons
    $('#home').click(function() {
        showMenuScreen();
    });
    // bind buttons
    $('#phone').click(function() {
        showPIError("Turn off airplane mode");
    });
});