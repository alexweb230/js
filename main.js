let move = document.getElementById('move');

let box = document.getElementsByClassName('box')[0];
let item = document.getElementsByClassName('item')[0];
let pos = 0;

 move.onclick = function () {
   setInterval(clearInt, 10)
 }

 function clearInt() {
     if(pos == 350){
         clearInterval()
     }
     else{
         pos ++
         item.style.top = pos + "px";
         item.style.left = pos + "px";
     }
 }