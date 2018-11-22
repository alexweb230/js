function Validator(settings) {

    var formEl = document.getElementById(settings.id);
    var formFields = formEl.elements;

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

    //init

    for(var i  = 0; i < formFields.length; i++){
        if(formFields[i].tagName == 'BUTTON'){
            continue;
        }
        formFields[i].addEventListener('change', checkIt);
    }

}