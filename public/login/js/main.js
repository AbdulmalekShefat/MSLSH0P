(function($) {
    "use strict";


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit', function() {
        var check = true;

        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }
        return check;
    });

    $('.validate-form .input100').each(function() {
        $(this).focus(function() {
            hideValidate(this);
        });
    });

    function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().trim().match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/) == null) {
                return false;
            } else {
                // send request
            }
        } else if ($(input).attr('name') == 'passcode') {
            if ($(input).val().trim().match(/^\d{6}$/) == null) {
                return false;
            } else {
                // send request
                return true;
            }
        } else if ($(input).attr('type') == 'password' || $(input).attr('name') == 'password') {
            if ($(input).val().match(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/) == null ||
                $(input).val().trim().length < 15) {
                return false;
            } else {
                // send request
                return true;
            }
        } else {
            if ($(input).val().trim() == '') {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

})(jQuery);

// FirebaseAuth

$("#google-signin").click(function() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().languageCode = 'ar';
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        // The user is signed in.
        window.location.replace("/");
        // ...
    }).catch(function(error) {

        alert(error.errorMessage);
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
});
$("#fb-signin").click(function() {
    alert("facebook.");
});