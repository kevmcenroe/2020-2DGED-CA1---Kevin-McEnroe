/*
function doSomething(a, b){

}

//objects

//bundle content
var player = {name: "john", lastname: "smith"};

//arrays of bundles content
var playerArray = [{a: "max"},{a: "bob"},{a:"ciara"}];

//pass objects into functions and return objects from functions
function getStatistics(numberArray){

    var sum = 0, product = 1;
    for(let i = 0; i < numberArray.length; i++){
        sum += numberArray[i];
        product *= numberArray[i];
    }

   // return new Pair(sum, product);
   return {s: sum, p: product};
}

let numArray = [1,2,3,4,5,6,7];
let results = getStatistics(numArray);
console.log(results.s);
console.log(results.p);

//representing structure of real-world elements
const animationData = Object.freeze({
    name: "running",
    frames: 5,
    actorType: 1, //1=enemy
    fps: 24,
    startIndex: 0,
    endIndex: 2,
    data: [
        {x: 0, y: 0, w: 16, h:24},
        {x: 16, y: 0, w: 16, h:24},
        {x: 32, y: 0, w: 16, h:24},
        {x: 48, y: 0, w: 16, h:24},
        {x: 64, y: 0, w: 16, h:24},
        {x: 80, y: 0, w: 16, h:24}
    ]
});

//const!!!!
animationData = "not animation data";

//freezes the content
animationData.name = null;



//objects and symbols
const entityType = {
    Player: Symbol("fsdfsf"), //0x23234 => 456
    Pickup: Symbol("sdfssfsdfsd"),  //0x232288 => 457
    Enemy: Symbol("sdfsdff"), //0x232288 => 510
    Background: Symbol("sdfsfsd"),
    Props: Symbol("sdfsdf"),
}

//nasty because who knows what 1 means!
initializeEntity(1);

//easier to read because the entityType allows us to replace 1 or N with a symbolic representation e.g. entityType.Player
initializeEntity(entityType.Player);

function initializeEntity(entityType){
    if(entityType == entityType.Player)
        makePlayer();
}
*/

//clone
class Account{
    name;
    id;

    constructor(id, name){
        this.name = name;
        this.id = id;
    }

    //value-type e.g. Number, String, Boolean (pass-by-copy) - deep
    //reference-type e.g. Array, Object  (pass-by-reference) - shallow
    Clone(){
        return new Account(
            this.name, //deep
            this.id    //deep
            );
    }
}

// var a1 = new Account("1234", "jane smith");
// var cloneA1 = a1.Clone();
// cloneA1.name = "john doe";
// console.log('a1.name :>> ', a1.name);
// console.log('a1.id :>> ', a1.id);

class Person{ //"has-a"
    email;
    account;

    constructor(email, account){
        this.email = email;
        this.account = account;
    }

    Clone(){
        return new Person(this.email, //deep of value-type
         //   this.account //shallow of reference-type
            this.account.Clone() //deep copy 
           );
    }
}

var p1 = new Person("jane@dkit.ie", new Account("123456", "jane smith"));
var cloneP1 = p1.Clone();

// cloneP1.email = "jane@ucd.ie";
// console.log('p1.email :>> ', p1.name);

cloneP1.account.name = "jeanice p smith";
console.log('cloneP1.account.name :>> ', cloneP1.account.name);

console.log('p1.account.name :>> ', p1.account.name);


class Car{
    doorFrontLeft;
    doorFrontRight;
    engine;

    //constructor
    //clone - deep or shallow?
}

class Door{
    weight;
    dimension;
    //constructor
    //clone - deep or shallow?
}

class Vector3{
    w;
    h;
    d;
}

class Engine{
    pistonA;
    pistonB;
     //constructor
    //clone - deep or shallow?
}

class Piston{
    length;
    material;
    //constructor
    //clone - deep or shallow?
}

var carArray = [];











