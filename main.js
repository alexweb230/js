let modal = document.getElementById('modal-box');
let btn = document.getElementById('btn-modal');
let span = document.getElementsByClassName('close')[0];

btn.onclick = function () {
    modal.style.display = 'block';
}
span.onclick = function () {
    modal.style.display = 'none';
}

window.onclick = function (event) {
    let target = event.target;

    if(target == modal){
        modal.style.display = 'none';
    }



}