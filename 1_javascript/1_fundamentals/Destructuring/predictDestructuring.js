//Problem 1
console.log("Problem 1 --> PREDICTION: " + "Tesla, Mercedes");
console.log("ACTUAL:");
//GIVEN
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

//PREDICTION THOUGHT PROCESS
//const [ randomCar ] = cars
//Pulls Tesla
//const [ ,otherRandomCar ] = cars
//Skips Tesla and pulls Mercedes
//console logs Tesla
//console logs Mercedes


//*************

//Problem 2
console.log("\nProblem 2 --> PREDICTION: " + "undefined, Elon");
console.log("ACTUAL:");
//GIVEN
// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// console.log(name);
// console.log(otherName);

//PREDICTION THOUGHT PROCESS
//const { name: otherName } = employee;
// name is now otherName; therefore undefined or causes an error (if error program halts)
// console logs undefined (if error, program halts with error)
// console logs Elon


//*************

//Problem 3
console.log("\nProblem 3 --> PREDICTION: " + "error");  //error no comma after last element  
console.log("ACTUAL:");
//GIVEN
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'   //missing comma, should cause an error
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

//(PREDICTION WRONG:  since this is the last key, the comma is not required)


//*************

// //Problem 4
console.log("\nProblem 4 --> PREDICTION: " + "false, true");
console.log("ACTUAL:");
//GIVEN
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;  
// //Predict the output
console.log(first == second);  
console.log(first == third);  

//PREDICTION THOUGHT PROCESS
//skip 8, pull 2
//skip 8, 2, 3, pull 5
//skip 8, 2, 3, 5, 6, 1, 67, 12, pull 2
    //first is now 2, second is 5  ==> false
    //first is 2, third is 2 ==> true
// //console logs false
// //console logs true


//*************

// //Problem 5
console.log("\nProblem 5 --> PREDICTION: " + "\nvalue" + "\n[ 1, 5, 1, 8, 3, 3 ]" + "\n1" + "\n5");
console.log("ACTUAL:");
//GIVEN
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;    //value
const { secondKey } = lastTest;  //1, 5, 1, 8, 3, 3
const [ ,willThisWork] = secondKey;  // secondKey is now 5
//Predict the output
console.log(key);  //value
console.log(secondKey);  //[1, 5, 1, 8, 3, 3]
console.log(secondKey[0]);  
console.log(willThisWork);  

//PREDICTION THOUGHT PROCESS
//key is set to the word "value"
    //console logs ==> value
//pull the full array in secondKey
    //console logs ==> [1, 5, 1, 8, 3, 3]
//pull index 0 of the secondKey array
    //console logs ==> 1
//willThisWork skips 1 and pulls 5
    //console logs ==> 5
