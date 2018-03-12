// prevent default submission
$("#form").submit(function (e) {
    $(".btn").addClass('disableButton');
    $(".btn").removeClass('activeButton');
    $(".btn").prop("disabled", true);
    sendData();
    return false;
});

// send AJAX request to server
function sendData() {
    // get form data
    var formData = {
        'token': $('input[name=token]').val(),
    };
    console.log(formData)
    $.ajax({
        type: 'POST',
        url: '/',
        data: formData,
        dataType: 'json',
        encode: true
    }).done(function (data) {
        console.log(data)
            if (data.success) {
                window.location.replace(data.url);
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
