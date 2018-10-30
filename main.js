function progress() {
    let elem = document.getElementById('progres-line'),
        width = 1,
        id = setInterval(progressStatus, 10);
        function progressStatus() {
            if(width >= 100){
                clearInterval(id);
            }
            else {
                width++;
                elem.style.width = width + '%';
            }
        }
    
}

progress();

