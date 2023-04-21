var param1, param2, param3;
var obj = {};
function onfocusout_validation(x) {
    param1 = "#".concat(x);
    param2 = "#err_".concat($(param1).attr('id'));
    param3 = "flag_".concat($(param1).attr('id'));

    if ($(param1).val() == "" || $(param1).val() == null) {
        $(param1).removeClass('form-control-success');
        $(param1).addClass('form-control-danger');
        $(param2).text("Required");
        obj[`${param3}`] = 1;
        return obj;
    }
}

function oninput_validation(x) {
    var obj = {
        name: {
            rgx: "^[A-Za-z ]+$",
            msg: "Name must be character."
        },
        phone: {
            rgx: "^[0-9]{10}$",
            msg: "Phone number must be of 10 digits."
        },
        email: {
            rgx: "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",
            msg: "Email must be like abc@xyz.com."
        },
        password: {
            rgx: "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$",
            msg: "Invalid password format."
        },
        msg: {
            rgx: "^[A-Za-z0-9~`!@#$%^&* ]+$",
            msg: "Invalid message format."
        }
    };

    param1 = "#".concat(x);
    type = $(param1).attr('data-type');
    param2 = "#err_".concat($(param1).attr('id'));
    param3 = "flag_".concat($(param1).attr('id'));

    var check = new RegExp(obj[type].rgx);

    if (!check.test($(param1).val())) {
        $(param1).removeClass('form-control-success');
        $(param1).addClass('form-control-danger');
        $(param2).text(obj[type].msg);
        obj[`${param3}`] = 1;
        return obj;
    }
    else {
        $(param1).removeClass('form-control-danger');
        $(param1).addClass('form-control-success');
        $(param2).text("");
        obj[`${param3}`] = 0;
        return obj;
    }
}

function nullfield_validation(x) {
    param1 = "#".concat(x);
    param2 = "#err_".concat($(param1).attr('id'));
    param3 = "flag_".concat($(param1).attr('id'));

    if ($(param1).val() == "" || $(param1).val() == null) {
        $(param1).removeClass('form-control-success');
        $(param1).addClass('form-control-danger');
        $(param2).text("Required");
        obj[`${param3}`] = 1;
        return obj;
    }
    else {
        $(param1).removeClass('form-control-danger');
        $(param1).addClass('form-control-success');
        $(param2).text("");
        obj[`${param3}`] = 0;
        return obj;
    }
}