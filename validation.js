$(document).ready(function () {
    $('#fninvalid').hide();
    $('#lninvalid').hide();
    $('#eminvalid').hide();
    $('#mobinvalid').hide();
    $('#pasinvalid').hide();
    $('#cpasinvalid').hide();

    $('#fn').keyup(function () {
        fname_check();
    });
    function fname_check() {

        var name_val = $('#fn').val();
        if (name_val.trim() == "") {
            $('#fninvalid').show();
            $('#fninvalid').html('Name Cannot be Empty');
            $('#fninvalid').focus();
            $('#fninvalid').css("color", "red");
            fn_error = false;
            return false;
        } else {
            $('#fninvalid').hide();
        }

        if (name_val.length < 3) {
            $('#fninvalid').show();
            $('#fninvalid').html('Name is too Short');
            $('#fninvalid').focus();
            $('#fninvalid').css("color", "red");
            fn_error = false;
            return false;
        } else {
            $('#fninvalid').hide();
        }
    }
    $('#ln').keyup(function () {
        lname_check();
    });
    function lname_check() {

        var name_val = $('#ln').val();
        if (name_val.trim() == "") {
            $('#lninvalid').show();
            $('#lninvalid').html('Name Cannot be Empty');
            $('#lninvalid').focus();
            $('#lninvalid').css("color", "red");
            ln_error = false;
            return false;
        } else {
            $('#lninvalid').hide();
        }

        if (name_val.length < 3) {
            $('#lninvalid').show();
            $('#lninvalid').html('Name is too Short');
            $('#lninvalid').focus();
            $('#lninvalid').css("color", "red");
            ln_error = false;
            return false;
        } else {
            $('#lninvalid').hide();
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

        if ((pas_val.length < 3) || (pas_val.length > 20)) {
            $('#pasinvalid').show();
            $('#pasinvalid').focus();
            $('#pasinvalid').html('Password Must be Between 3-20 Characters');
            $('#pasinvalid').css("color", "red");
            pas_error = false;
            return false;
        } else {
            $('#pasinvalid').hide();
        }

    }
    $('#cpas').keyup(function () {
        cpas_check();
    });
    function cpas_check() {
        var cpas_val = $('#cpas').val();
        var pas_val = $('#pas').val();

        if (cpas_val.trim() == "") {
            $('#cpasinvalid').show();
            $('#cpasinvalid').html('This Fiesld Cannot be Empty');
            $('#cpasinvalid').focus();
            $('#cpasinvalid').css("color", "red");
            cpas_error = false;
            return false;
        } else {
            $('#cpasinvalid').hide();
        }

        if (pas_val != cpas_val) {
            $('#cpasinvalid').show();
            $('#cpasinvalid').focus();
            $('#cpasinvalid').html('Passwords are not Matching');
            $('#cpasinvalid').css("color", "red");
            cpas_error = false;
            return false;
        } else {
            $('#cpasinvalid').hide();
        } l
    }


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

    $('#submitbtn').click(function () {
        fn_error = true;
        ln_error = true;
        pas_error = true;
        cpas_error = true;
        em_error = true;
        ph_error = true;
        fname_check();
        lname_check();
        pas_check();
        cpas_check();
        em_check();
        phone_check()

        if ((fname_check == true) && (pas_check == true) && (lname_check == true)
            && (cpas_check == true) && (em_check == true) && (phone_check == true)) {
            return true;
        }
        else {
            return false;
        }

    });

});