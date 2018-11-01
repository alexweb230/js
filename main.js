let btn = document.getElementById('btn'),
    popup = document.getElementById('mypopup'),
    close = document.querySelector('.close');

    btn.onclick = function () {
        popup.style.display = "block";
    }
    close.onclick = function () {
        popup.style.display = "none";
    }
    window.onclick = function (e) {
        let target = e.target;
        if(target == popup){
            popup.style.display = "none";
        }
    }


