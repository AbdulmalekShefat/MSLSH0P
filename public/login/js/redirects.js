$('#reset-password-btn').click(function() {
    $(".form").load("forms/reset-password.html", function(response, status, xhr) {
        if (status == "error") {
            var msg = "Sorry but there was an error: ";
        } else {
            $.getScript("js/main.js");
        }
    });
});

$('#new-account').click(function() {
    $(".form").load("forms/signup.html", function(response, status, xhr) {
        if (status == "error") {
            var msg = "Sorry but there was an error: ";
        } else {
            $.getScript("js/main.js");
        }
    });
});