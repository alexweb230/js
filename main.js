var validatorMethods = {
    isNotEmpty: function (el) {
        if (el.value == '') {
            return false;
        }
        return true;
    },
    isPattern: function (el, pattrn) {
        return pattrn.test(el.value);


    },
    
    isContains: function (el, el2) {
        if(el.value == el2.value){
            return  true;
        }
        return false;
    }
}


function Validator(settings) {

    var formEl = document.getElementById(settings.id);
    var formFields = formEl.elements;
    var errors = [];
    var rulesPattern = {
        email: /^\w{1,}@\w{1,}\.\w{2,}$/,
        tel: /^\+38\(\d{3}\)\d{7}$/,
    }

    var showError = function (el) {
        el.parentNode.classList.remove('success');
        el.parentNode.classList.add('error');
        el.nextElementSibling.innerHTML = el.dataset.error;

    }
    var showSuccess = function (el) {
        el.parentNode.classList.remove('error');
        el.parentNode.classList.add('success');
        el.nextElementSibling.innerHTML = el.dataset.success;
    }

    var isValid = function () {

    }

    var checkIt = function () {

        if (isValid()) {
            showSuccess(this);
            for (var i = 0; i < errors.length; i++) {
                if (errors[i].el == this) {
                    delete(errors[i]);
                }
            }
        } else {
            showError(this);
            errors.push({
                el: this,

            })
        }

    }

    //init

    for (var i = 0; i < formFields.length; i++) {
        if (formFields[i].tagName == 'BUTTON') {
            continue;
        }
        formFields[i].addEventListener('change', checkIt);
    }

    for(var prop in settings.pattern){
        rulesPattern[prop] = settings.pattern[prop]
    }

}