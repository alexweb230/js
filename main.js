window.onload = function () {
   let form = document.getElementById('form');
   let formElements = form.elements;
   let btn = document.querySelector('.btn-form');


   btn.addEventListener('click', Validator);

   function Validator() {
      for(let i = 0; i < formElements.length; i++){
        if(formElements[i].tagName == 'BUTTON' || formElements[i].tagName == 'FIELDSET'){
           continue;
        }
        if(formElements[i].value == ''){

            let tess = formElements[i].nextElementSibling.classList.add('active');







        } else {
            console.log('ne pusto');
        }

          // console.log(formElements[i]);
      }


   }







}


