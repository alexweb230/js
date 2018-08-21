"use strict";

window.onload = function () {

    class Test{
        constructor(age, height){
            this.age = age;
            this.height = height;
        }
        box(){
            return "test-box";
        }
    }

    let test = new Test(20, 30);

    console.log(test.age);
    console.log(test.height);





    class Test_2 extends Test{
        constructor(){
            super();
            this.length = 100;
        }
    }

    let test_2 = new Test_2();



    console.log(test_2.age);
    console.log(test_2.height);
    console.log(test_2.length);

}