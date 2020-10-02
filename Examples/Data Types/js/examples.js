/*
1. Functions
2. Invoke functions (function, function expression)
3. Pass function to a function
4. array

5. object
6. array of objects
7. function that takes array of objects and a function
8. function that takes array of objects and an array of functions
*/
/*
var ages = [19, 21, 23, 34, 32, 18];
console.log(ages);
console.log(ages.length);
console.log(ages[0]);

for(var i = 0; i < ages.length; i++)
    console.log(ages[i]);
*/

var names = new Array();
names.push("alan");
names.push("bea");
names.push("ciara"); //a, b, c
console.log(names);
names.pop();
console.log(names);
console.log("\npush and pop...\n");

names.unshift("ANNA");
console.log(names); //push to front
names.shift(); //pop from front

function print(x){
    console.log(x);
}

//+ve, -ve, 0
function sortByLength(a, b){
    return a.length - b.length;
}
function convertToUppercase(a){
    return a.toUpperCase();
}

//global variable
const LENGTH_THRESHOLD = 6;

function longerThan(a){
    return a.length >= 6;
}


var capitals = ["dublin","paris","beijing","berlin","tokyo"];

console.log("\nforEach...\n");
capitals.forEach(print);

console.log("\nsort...\n");
capitals.sort(sortByLength);
capitals.forEach(print);

console.log("\nmap...\n");
var mappedCapitals = capitals.map(convertToUppercase);
mappedCapitals.forEach(print);

console.log("\nfilter...\n");
var filteredCapitals = capitals.filter(longerThan);
filteredCapitals.forEach(print);


//1st object!
var p1 = {
    name: "max",
    type: "sniper",
    health: 75
};
//console.log(p1);
p1.health = 85;
//console.log(p1);

var p2 = {
    name: "max",
    type: "sniper",
    health: 75
};

var p3 = p1; //shallow-copy of p1 i.e. p3 and p1 point to SAME obj
p3.health = 100000;
console.log(p1);

//creates a blank that we populate with COPY of data from p1
var p4 = {
    name: "",
    type: "",
    health: -1
};
//properly populated DEEP COPY
p4.name = p1.name;
//...etc


var pickup1 = {
    type: "ammo", //efficient? integer? TODO!!!
    value: 25,
    ttl: 60000, //time to live is 60,000ms = 60s
    model: {
        image: "pacman_spritesheet.jpg",
        type: "animated", //or "static"
        upos: 50, //position within the spritesheet
        vpos: 100
    }
}


