function Bird(){
    var weight = 15 ;
    this.getWeight = function(){
        return weight;
    };
}
let duck = new Bird();

console.log(duck.getWeight()); //return 15.