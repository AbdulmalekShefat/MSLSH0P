(function($) {
    "use strict";


    /*==================================================================
    [ Validate ]*/
    var input = $('.mail-login .input100');

    // Listen to submit event on the <form> itself!
    $('.mail-login').submit(function(e) {
        e.preventDefault();
        var check = validate($('#email'));
        if (check) {
            var email = $('#email').val();
            var password = $('#password').val();
            firebase.auth().languageCode = 'AR';
            //Sign In User with Email and Password
            firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode == 'auth/user-not-found') {
                    alert('heyyyy');
                }
            });
        }
        return check;
    });

    $('.mail-login .input100').each(function() {
        $(this).focus(function() {
            hideValidate(this);
        });
    });

    function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().trim().match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/) == null) {
                return false;
            }
        } else if ($(input).attr('name') == 'passcode') {
            if ($(input).val().trim().match(/^\d{6}$/) == null) {
                return false;
            }
        } else if ($(input).attr('type') == 'password' || $(input).attr('name') == 'password') {
            if ($(input).val().match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/) == null) {
                return false;
            }
        } else {
            if ($(input).val().trim() == '') {
                return false;
            }
        }
        return true;
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