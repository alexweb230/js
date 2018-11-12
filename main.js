let btn = document.querySelectorAll('.open-popup'),
    close = document.querySelectorAll('.close');


    btn.forEach(function (el) {
        el.addEventListener('click', function () {
            let popupName = el.getAttribute('data-popup');
            document.getElementById(popupName).style.display = 'block';
        })
    });

    close.forEach(function (el) {
        el.addEventListener('click', function () {
            let popup = el.closest('.popup');
            popup.style.display = 'none';
        })
    });

    window.onclick = function (e) {
        let target = e.target;
        if(target.classList.contains('popup')){
            target.style.display = "none";
        }
    }


