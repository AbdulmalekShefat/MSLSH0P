(function($) {
    "use strict";


    /*==================================================================
    [ Validate ]*/

    // Listen to submit event on the <form> itself!
    /* Login */
    $('.mail-login').submit(function(e) {
        e.preventDefault();
        var check = validate($('#email'));
        if (check) {
            var email = $('#email').val();
            var password = $('#password').val();
            //Sign In User with Email and Password
            firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode == 'auth/user-not-found') {
                    // TODO: handle this shit !
                    alert('fuck');
                }
            });
        }
        return check;
    });

    // Listen to submit event on the <form> itself!
    /* Signup */
    // var input = $('.mail-signup .input100');
    $('.mail-signup').submit(function(e) {
        e.preventDefault();
        alert('Sign up');
        return true;
        // var check = validate('#email') && validate('#password') && validate('#password-confirm');
        // alert(check);
        // var email = $('#email').val().trim();
        // var password = $('#password').val();
        // var password2 = $('#password-confirm').val();
        // if (check && (password == password2)) {
        //     //Sign Up User with Email and Password
        //     firebase.auth().createUserWithEmailAndPassword(email, password)
        //         .catch(function(error) {
        //             // Handle Errors here.
        //             var errorCode = error.code;
        //             var errorMessage = error.message;
        //             alert(errorMessage);
        //         });
        // }
        // return check;
    });

    // Listen to submit event on the <form> itself!
    /* reset password */
    $('.reset-password').submit(function(e) {
        e.preventDefault();
        var check = validate($('#email'));
        if (check) {
            var email = $('#email').val();
            console.log(email);
            //Reset Password
            firebase.auth().sendPasswordResetEmail(email)
                .then(function() {
                    // Password reset email sent.
                    // TODO: edit this please;
                    alert('sent');
                    window.location.replace("/");
                })
                .catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    if (errorCode == 'auth/user-not-found') {
                        // TODO: handle this shit !
                        alert('fuck');
                    }
                });
        }
        return check;
    });

    $('.validate-input .input100').each(function() {
        $(this).focus(function() {
            hideValidate(this);
        });
    });

    function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().trim().match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/) == null) {
                showValidate(input);
                return false;
            }
        } else if ($(input).attr('name') == 'passcode') {
            if ($(input).val().trim().match(/^\d{6}$/) == null) {
                showValidate(input);
                return false;
            }
        } else if ($(input).attr('type') == 'password' || $(input).attr('name') == 'password') {
            if ($(input).val().match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/) == null) {
                showValidate(input);
                return false;
            }
        } else {
            if ($(input).val().trim() == '') {
                showValidate(input);
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

// redirects

$('#reset-password-btn').click(function() {
    $(".form").load("forms/reset-password.html", function(response, status, xhr) {
        if (status == "error") {
            var msg = "Sorry but there was an error: ";
        } else {

        }
    });
});

$('#new-account').click(function() {
    $(".form").load("forms/signup.html", function(response, status, xhr) {
        if (status == "error") {
            var msg = "Sorry but there was an error: ";
        } else {

        }
    });
});

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
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        alert(errorMessage);
    });
});

$("#fb-signin").click(function() {
    alert("facebook.");
});