let Bird ={
    name: "Donald",
    numLegs: 2
};
let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  var Glidmixin = function(Obj){
      Obj.Glid=function(){
          console.log ("the ability of glide")
      }
  }
  Glidmixin(Bird);
  Glidmixin(boat);
  console.log(bird.Glid());//return the ability of glide.
