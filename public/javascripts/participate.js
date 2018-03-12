// prevent default submission
$("#form").submit(function (e) {
    $("button").addClass('disableButton');
    $("button").removeClass('activeButton');
    $("button").prop("disabled", true);
    sendData();
    return false;
});

// send AJAX request to server
function sendData() {
    // get form data
    var formData = {
        'name': $('input[name=name]').val(),
        'email': $('input[name=email]').val(),
        'phone': $('input[name=phone]').val(),
    };
    console.log(formData)
    $.ajax({
        type: 'POST',
        url: '/participate',
        data: formData,
        dataType: 'json',
        encode: true
    }).done(function (data) {
        console.log(data)
            if (data.success) {
                // form is no longer required, remove it
                $('#theFormDiv').css("display","none");
                // display success message
                $("#successSpan").css("display", "block");
                $(".container").css("background-color", "rgba(27, 25, 187, 0.2)");
            } else {
                $('.error').text(data.error);
                $(".error").css("display", "block");
                killerrors();
            }
            // enable the button
            $("button").addClass('activeButton');
            $("button").removeClass('disableButton');
            $("button").prop("disabled", false);
        });
}

function killerrors() {
    setTimeout(function () {
        $(".error").css("display", "none");
    }, 5000);
}
