"use strict";

const TypeWriter = function (txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.wait = wait;
    this.wordIndex = 0;
    this.txt = '';
    this.isDeleting = false;e3
    this.type();
}

document.addEventListener('DOMContentLoaded', init);


function init() {
    let txtElement = document.querySelector('.text'),
        words = JSON.parse(txtElement.getAttribute('data-words')),
        wait = txtElement.getAttribute('data-wait');````



    console.log(words);


}