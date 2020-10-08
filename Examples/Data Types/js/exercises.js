runExercises();
function runExercises()
{
    var degrees = 45;

    try{
        var rads = toRadians(null);
        console.log(degrees + " is " + rads + " rads");
    }
    catch(err){
        console.log(err);
        //try to recover or degrade gracefully
    }
}

/*****************************************************************************/
function toRadians(degrees){  
    if(degrees == null || typeof(degrees) != "number" || isNaN(degrees))
            throw "degrees value provided is invalid!";
    return degrees * Math.PI/180;
}

function toUpperStringArray(array){
    if(array == null || array.length == 0 || typeof (array[0]) != "string")
        throw "Exception!";
    return 1;
}




























/**************************************************************************/
/*
var user;  //undefined is declared but not initialized
user = "Niall"; //interpreter know that this type is a string and its value is "Niall"

function search(array, value){
    return null;
}

console.log(typeof("Niall"));
console.log(typeof(true));
console.log(typeof(21));
console.log(typeof(3.14));
console.log(new Array());
console.log({name: "jack", age: 21});

var x = 0.0000000001;
var y = 0.000000000099999;
var z = 1E-9;

if(Math.abs(x - y) < Number.EPSILON)
    console.log("Same values");
*/