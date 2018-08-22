"use strict";


window.onload = function () {

    let prev = document.querySelector('.prev');
    let next = document.querySelector('.next');
    let img = document.querySelectorAll('.photos img');
    let i = 0;
    let len = img.length - 1;

    prev.onclick = function (e) {
        img[i].style.display = 'none';
        i--
        if (i < 1) {

            i = len;

        }
        img[i].style.display = 'block';

    }

    next.onclick = function () {

        img[i].style.display = 'none';
        i++
        if (i >= len) {

            i = 0;

        }
        img[i].style.display = 'block';


    }


}

