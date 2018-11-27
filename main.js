

window.onload = function () {
    let form = document.forms[0];
    let formElements = document.forms[0].elements;
    let btnForm = document.forms[0].elements[0].querySelector('.btn-form');

    btnForm.addEventListener('click', Validator);









    function Validator() {
        if(formElements.val == ''){
            console.log('test');
        }
         console.log('no-test');

    }
}


