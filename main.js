let text = document.getElementById('text'),
    inputWrap = document.getElementById('inputwrap'),
    input = document.getElementById('input'),
    inputWidth,
    textWidth,

    // inputPadding = window.getComputedStyle(input).getPropertyValue('border');

    inputPadding = input.clientWidth;

console.log(inputPadding);


input.addEventListener("keyup", function () {
    text.innerHTML = this.value;

    textWidth = text.offsetWidth;
    inputWidth = input.offsetWidth;

     if(textWidth > inputWidth - 90){
         inputWrap.classList.add('test')
     }
     else {
         inputWrap.classList.remove('test')
     }





});








