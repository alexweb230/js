function progress() {
    let elem = document.getElementById('progres-line'),
        width = 1,
        id = setInterval(progressStatus, 100);
        function progressStatus() {
            if(width >= 100){
                clearInterval(id);
            }
            else {
                width++;
                elem.style.width = width + '%';
                elem.innerHTML = width * 1 + '%';
            }
        }
    
}

progress();

