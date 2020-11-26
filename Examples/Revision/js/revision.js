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

//clone
