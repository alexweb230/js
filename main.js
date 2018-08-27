"use strict";


window.onload = function () {

    let item = document.querySelectorAll('.items .item');

    // for(let i = 0; i < item.length; i++){
    //      item[i].onclick = activeItem;
    // }
    function activeItem() {
        this.classList.toggle('test');
    }


    setInterval(function () {
        let rand = mtRand(0, item.length - 1);

        activeItem.call(item[rand]);

    }, 1000);


}


function mtRand(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
}


























