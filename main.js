"use strict";

$(function () {

    class Animal {
        constructor(age) {
            this.age = age;
            this.length = 20;
        }
    }

    class Cat extends Animal {
        constructor(age) {
            super(age);
            this.mustache = true;
        }
    }

    class Dog extends Cat{
        constructor(age) {
            super(age);
            this.col = "white";
        }
    }
    let cat = new Cat(100);
    let dog = new Dog(400);

    console.log(cat.age);
    console.log(dog.age);

     const test = 50;
     let box = 100;
     box = "a";




     console.log(test);
     console.log(box);

     timer();

     let str = some('test', 1,2,3,1,1,400);

     document.querySelector('.div').innerHTML = str;



     let test_2 = (x) => x + 1;

     console.log(test_2(2));


     let items = document.querySelectorAll('.items .item');

     for(let it of items){
         console.log(it);
         it.onclick = function (e){
            this.classList.toggle('active');
         }
     }


});


function timer(time = 60) {
    console.log(time);

}

function some(name, ...marks) {
    console.log(name);
    console.log(marks);
    for(let m in marks){
        console.log(m);
    }
    for(let m of marks){
        console.log(m);
    }

    let res = `${name}  ${marks}`;

    return res;
}




























