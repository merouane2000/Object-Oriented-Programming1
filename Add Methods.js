function Animal (){}
Animal.prototype.eat = function(){
    console.log("nom nom nom");
};
function Dog (){}
Dog.prototype = Object.prototype(Animal.prototype); // ChildObject.prototype = Object.create(ParentObject.prototype);
Dog.prototype.constructor=Dog;
Dog.prototype.bark= function(){           //ChildObject.prototype.methodName = function() {...};
    console.log("Woof!");
}
var beagle = new Dog;
console.log(beagle.eat()); //return "nom nom nom".
console.log(beagle.bark()); // return "Woof!".