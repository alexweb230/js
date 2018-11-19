let forms = document.getElementsByTagName('form');

for(let form in forms){
   form.addEventListener('submit', validator);
}


class Rules{
    constructor(){
      email = /^\w{1,}@\w{1,}\w{2,}$/

    }


}





function validator() {
   console.log('test');
}



