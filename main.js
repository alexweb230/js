"use strict";

var tab,
    tabCont;

window.onload = function () {
    tabCont = document.getElementsByClassName('tabs-content');
    tab = document.getElementsByClassName('tab');
     hideTabsContent(1);


}


function hideTabsContent(a) {
    for (var i = a; a < tabCont.length; i++) {

        tabCont[i].classList.remove('show');
        tabCont[i].classList.add('hide');
        tab[i].classList.remove('bord');
    }
}

document.getElementById('tabs').onclick = function (event) {
    var target = event.target;
    if (target.className == 'tab') {
        for (var i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                showTabsContent(i);
                break;
            }
        }
    }
}
function showTabsContent(b) {
    if (tabCont[b].classList.contains('hide')) {
        hideTabsContent(0);
        tabCont[b].classList.remove('hide');
        tabCont[b].classList.add('show');
        tab[b].classList.add('bord');
    }
}


















