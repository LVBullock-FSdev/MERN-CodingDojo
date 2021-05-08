//1
console.log("#1 --> PREDICTION: " + "undefined");
console.log("ACTUAL:");
//  GIVEN
console.log(hello);
var hello = 'world';                                 
//this is the way the interpreter will see it
//var hello; (this gets hoisted to the top) = will stay where it is  (only takes what's to the left of the =)
//console.log(hello);
//hello = 'world';  
//returns undefined because no value was given to hello

//2
console.log("\n\n#2 --> PREDICTION:  magnet");
console.log("ACTUAL:");
//GIVEN
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

//THIS IS WHAT IS ACTUALLY HAPPENING TO LINES 17 - 22
// function test(){
    //var needle;  //undefined
//     needle = 'magnet';  //stored the value
//     console.log(needle);  //prints magnet to the console
// }
// var needle;  //undefined
// needle = 'haystack';   //value stored
// test();  //calling the test function
//nothing left to do




//3
console.log("\n\n#3 --> PREDICTION:  only okay, super cool");
console.log("ACTUAL:");
//GIVEN
var brendan = 'super cool';
function print(){
    brendan = 'only okay';  //should not do this
    console.log(brendan);
}
print();
console.log(brendan);


// function print(){
//     brendan = 'only okay';  //assigned the value 'only ok' to bren
//     console.log(brendan);
// }
// var brendan;  //defined the variable brendan
// brendan = 'super cool';  //assigned the value 'super cool' to brendan -- but nothing will be done with this
// print();
// only okay prints 
// console.log(brendan);
// only okay prints





//4
console.log("\n\n#4 --> PREDICTION:  chicken, gone");
console.log("ACTUAL:");
//GIVEN
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//5
console.log("\n\n#5 --> PREDICTION:  chicken, fish, fish, undefined");
console.log("ACTUAL:");

console.log("Process exited with code 1  -- TypeError: mean is not a function");
//GIVEN
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

//6
console.log("\n\n#6\nPREDICTION:  undefined, rock, r&b, disco");
console.log("ACTUAL:");
//GIVEN
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//7
console.log("\n\n#7\nPREDICTION:  error - dojo is not defined (missing 'var'), execution halts");
console.log("ACTUAL:");
//GIVEN
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    console.log(dojo);
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//8
console.log("\n\n#8\nPREDICTION:  undefined, undefined, Chicago, closed for now");
console.log("ACTUAL:");

//GIVEN
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
