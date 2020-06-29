let funModule = (function(){
    return {
        isCuteMixin : function(Obj){
            Obj.iscute = function(){
                return true;
            };
        },
        singMixin : function(Obj){
            Obj.sing = function(){
                console.log("Singing to an awesome tune");
            };
            
        }
    }
}) ();// The two parentheses cause the function to be immediately invoked.