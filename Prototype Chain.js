function Dog(name){
    this.name=name;
}
var beagle= new Dog("snoopy");
Dog.prototype.isPrototypeOf(beagle);

Object.prototype.isPrototypeOf(Dog.prototype); // return true .
