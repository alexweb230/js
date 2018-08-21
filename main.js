"use strict";

window.onload = function () {

    let text = document.querySelector('#test');

     text.onclick = function () {
        //this.style.color = 'red';
         this.innerHTML += 'ура';
         this.className = 'test';

     }






}

