$(document).ready(function () {
    $('#em').keyup(function () {
        em_check();
    });
    function em_check() {
        var em_val = $('#em').val();
        var pattern = /^[A-Za-z._]{3,}@[A_Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;

        if (em_val.trim() == "") {
            $('#eminvalid').show();
            $('#eminvalid').html('Email Cannot be Empty');
            $('#eminvalid').focus();
            $('#eminvalid').css("color", "red");
            em_error = false;
            return false;
        } else {
            $('#eminvalid').hide();
        }

        if (!pattern.test(em_val)) {
            // alert("Sdfdf");
            $('#eminvalid').show();
            $('#eminvalid').html('Your email must be a valid email');
            $('#eminvalid').focus();
            $('#eminvalid').css("color", "red");
            em_error = false;
            return false;
        } else {
            $('#eminvalid').hide();
        }
    }
    $('#mb').keyup(function () {
        phone_check();
    });
    function phone_check() {

        var ph_val = $('#mb').val();
        var pattern = /^(\+\d{1,3}[- ]?)?\d{10}$/;
        if (ph_val.trim() == "") {
            $('#mobinvalid').show();
            $('#mobinvalid').html('This Field Cannot be Empty');
            $('#mobinvalid').focus();
            $('#mobinvalid').css("color", "red");
            ph_error = false;
            return false;
        } else {
            $('#mobinvalid').hide();
        }

        if (!pattern.test(ph_val)) {
            $('#mobinvalid').show();
            $('#mobinvalid').html('Please Enter a Valid Phone Number');
            $('#mobinvalid').focus();
            $('#mobinvalid').css("color", "red");
            ph_error = false;
            return false;
        } else {
            $('#mobinvalid').hide();
        }
    }
    $('#pas').keyup(function () {
        pas_check();
    });
    function pas_check() {
        var pas_val = $('#pas').val();
        if (pas_val.trim() == "") {
            $('#pasinvalid').show();
            $('#pasinvalid').html('Password Cannot be Empty');
            $('#pasinvalid').focus();
            $('#pasinvalid').css("color", "red");
            pas_error = false;
            return false;
        } else {
            $('#pasinvalid').hide();
        }

    }
    $('#submitbtn').click(function () {

        pas_error = true;
        em_error = true;

        em_check();
        pas_check();

        if ((pas_check == true) && (em_check == true)) {
            $form.submit();
            return true;
        }
        else {
            return false;
        }
    });

});