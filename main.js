let forms = document.getElementsByTagName('form');

for(let i = 0; i < forms.length; i++){
   forms[i].addEventListener('submit', validator);
}


class Rules = {
    email: /^\w{1,}@\w{1,}\w{2,}$/,
    test: "11111"
}





function validator() {
    console.log(Rules.test);
}



 console.log();