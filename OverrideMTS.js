function Bird (){}
Bird.prototype.fly = function (){
    return "I am flying!";
};
function Penguin (){}
Penguin.prototype = Object.prototype(Bird.prototype);
Penguin.prototype.constructor= Penguin;

Penguin.prototype.fly= function(){
    return "Alas, this is a flightless bird." ;// Override Inherited Methods from Bird parent object.
};
var Penguin = new Penguin ;
console.log(penguin.fly()); // return Alas, this is a flightless bird.