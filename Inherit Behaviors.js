function Animal (){}
Animal.prototype={
   constructor=Animal,
   eat:function(){
       console.log("nom nom nom");
   }
};

var duck = Object.create(Animal.prototype);
var Dog = Object.create(Animal.prototype);
console.log(duck.eat()); // return nom nom nom.

function Dog (){}
Dog.prototype = Object.create(Animal.prototype);
let beagle = new Dog;