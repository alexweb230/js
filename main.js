"use strict";
    window.onload = function () {
    document.getElementById('nav').onmouseover = function(event) {
        let target = event.target;

        if(target.className == 'menu-item'){
            let sub = target.getElementsByClassName('submenu');
            closeMenu();
            sub[0].style.display = 'block';
        }
    }
    document.onmouseover = function (event) {
        let target = event.target;
        if(target.className != 'menu-item' && target.className != 'submenu'){
            closeMenu()
        }
    }

}
function closeMenu() {
    let subm = document.getElementsByClassName('submenu');
    for(let i = 0; i < subm.length; i++){
        subm[i].style.display = 'none';
    }
}


















