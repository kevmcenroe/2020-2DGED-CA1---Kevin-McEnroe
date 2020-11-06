document.writeln("Open the Inspect/Console pane in Chrome to see the output...");

runExercises();

function runExercises()
{
    /*
    const name = "dkit";

    const password = Symbol("password");
    const user = {
        first: "jane",
        age: 22,
        [password]: "my secret value",
        subscription: "un-validated"
    };

    user.currency = "Yen";
    user.subscription = "Platinum";
    const subscription = new Symbol();

    user[subscription] = "Platinum";



    //object creation -> read object -> adds/edits object -> reads for some new value
    //Destiny 2 server
        //create template user account
                //initialise user preferences by locality
                            //check balance on the new account
                                    
//    console.log('p :>> ', p);
    console.log('Object :>> ', Object.keys(p));
    console.log('Object :>> ', Object.getOwnPropertyDescriptor(p));
    console.log('Object :>> ', Object.getOwnPropertyNames(p));
    console.log('Object :>> ', Object.getOwnPropertySymbols(p)[0]);
    
    var symbolsArray = Object.getOwnPropertySymbols(p);


//     //in some other place in the code...
//     console.log('Object :>> ', Object);  p.somethingNew = "a new field";

    const TaskPriority = Object.freeze({ 
        Low: Symbol("Low"),         //450
        Medium: Symbol("Medium"),   //555,555
        High: Symbol("High")        //34
    });
  
    TaskPriority.Medium = 999999;
*/
    /*************************************************************************/
/*
    let printFE = function(x){
        console.log('x :>> ', x);
    };

    printFE("hello world!");
    doSomethingExpression("boo!!", 24);

    //arrow function is anonymous i.e. it has no assigned name until we assign
    let printAF = (a) => {
        console.log('a :>> ', a);
    };
    printAF("goodbye!");
*/

    var bikes = new Array();
    bikes.push({make: "raleigh", price: 1230});
    bikes.push({make: "carrera", price: 2999});
    bikes.push({make: "indur", price: 599});
    
    var fn = (bike) => {
        console.log(bike.make + ", " + bike.price);
    };

    display(bikes, fn);

    display(bikes, (b) => {
        console.log('b.price :>> ', b.price);
    });
}

function display(array, displayFn){
    for(let i = 0; i < array.length; i++){
        displayFn(array[i]);
    }
}




//function declaration
function doSomething(msg, value){
    console.log(msg + ": " + value);
}

//function expression
var doSomethingExpression = function(msg, value){
    console.log(msg + ": " + value);
};




