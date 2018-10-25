(function () {

    let letters = {},
        inp = document.getElementById('input'),
        val,
        oldVal,
        lastChar;

    inp.addEventListener('keyup', function (e) {
        val = this.value;

        if(e.keyCode === 8){
            console.log("true");
        }
        else if(e.keyCode >= 65 && e.keyCode <= 90){

        }
    })





})();