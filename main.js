
window.onload = function() {

};





function fun() {
    
    let checkbox = document.getElementById('checkbox');

    if(checkbox.checked){
        alert('111111');
    }

    else{
        alert('22222')
    }


    
}

function radio() {
    let radio  = document.getElementsByName('radio');

    for(let i = 0; i < radio.length; i++){
            if(radio[i].checked){
                console.log("выбран" + i);
            }
    }
    
}