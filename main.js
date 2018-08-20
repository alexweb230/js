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
    var cat = new Cat(100);
    var dog = new Dog(400);

    console.log(cat.age);
    console.log(dog.age);


});


