

window.onload = function () {
    let form = document.forms[0];
    let formElements = document.forms[0].elements;
    let btnForm = document.forms[0].elements[0].querySelector('.btn-form');

    btnForm.addEventListener('click', Validator);









    function Validator() {
        for(let i = 0;  i < formElements.length; i++){
            if(formElements[i].value === ''){
                formElements[i].nextSibling
            }

        }





    }
}


