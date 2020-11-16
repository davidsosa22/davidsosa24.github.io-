//1. Number is any numerical value: positive, negative, or with decimal points
let n = 24;

//2.String is collection of characters by quotes  (' 'or " ")
let me = "hi";

//3.Boolean is based on a true ot fals value
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

//4.Array is a complex data type with every value in the list having an index. 
//The first value of the index is 0
//Arrays can contain references to any other data type, including: Strings, Numbers, Booleans, Other Arrays, and Objects, and Functions
let you = ["me", 1, true, []]

//5. Object is a complex data. - Collection of data stored as key/value pairs
/*  
    A key's values can be: Strings, Numbers, Booleans, Other Arrays and Objects, and Functions
    Do not have a length property
    Collection of data stored as key/value pairs
*/
let jizz = {
    age: 45,//age is the key while 45 is the value
    name: "Tim",
};

//6. Function is reusable blocks of code that accept inputs, process those inputs, and returns a new data value. 
/*Functions allow us to write reusable, modular code
    ex function funcName(){
    do something
    return parameter
}
functionName()// this is the function call
*/
//paratmers are what you put in the (). They are used as arguremnts 
//reteurn statement ends function execution and specifies the value tobe returned by that function
function myFunction(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}
myFunction();//Calling a function, runs the code in the function body

//7.Undefined indicates that a variable has not been assigned a value, or not declared at all.
var x; // not assinged a value

//8. Null is "nothing". It is supposed to be something that doesn't exist. It is also 
var person = {firstName:"David", lastName:"Palacios", age:24,};
person = null;    // Now value is null, but type is still an object

//9.NaN property is a value representing Not-A-Number. 
var i = 1 + NaN//this will equal NaN because there is no number to add. which makes it eual not a number

//10. Infinity is a numeric value that represents positive infinity.
//-Infinity is a numeric value that represents negative infinity.
//Infinity is displayed when a number exceeds the upper limit of the floating point numbers, which is 1.797693134862315E+308.
//-Infinity is displayed when a number exceeds the lower limit of the floating point numbers, which is -1.797693134862316E+308.

//11. difference between primitive/simple and complex data types
/*
by value copies the value of the original variable into two separate spots in memory.
let a= 5
let b = a
console.log(a) // => 5
console.log(b) // => 5
*/

//complex data types 
/*When we create a new variable (b) and assign 
it the value of variable (a) the equals operator knows 
we are dealing with an object and points it to the same address that (a) points to
*/
let a = {
    language: "Javascript",
    name: "David",
}
let b = a

console.log(a) // => {language: "Javascript"}
console.log(b) //=> {language: "Javascript"}

a.language = "Ruby"

console.log(a) // => {language: "Ruby"}
console.log(b) // => {language: "Ruby"}

//12.