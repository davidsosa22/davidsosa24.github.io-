//1.Arithmetic operators are used to perform arithmetic between variables and/or values.
//+	 is Addition
var x = 5 + 2;//result is 7 when you console.log x
//-	is Subtraction
var x = 5 - 2;//result is 2 when you console.log x
//   *	is Multiplication
var x = 5 * 2;//result is 10 when you console.log x
//   /  is	Division
var x = 10 / 2;//result is 5 when you console.log x
// %  is	Modulus
var x = 10 % 4;//result is 2 when you console.log x
//++  is	Increment
var y = 6;
var x = ++y//result is 7 when you console.log x
//-- is	Decrement
var y = 6;
var x = --y//result is 5 when you console.log x

//2.Assignment operators are used to assign values to JavaScript variables.
// = means assign 
var x = 5//I assaigned x with 5
// += is addition assignment
var x = 4;
x += 5;//result is 9 when you console.log x
// -= is subtraction assignment	
var x = 10;
x -= 5;//result is 5 when you console.log x
// *= is multiplication assignment
var x = 10;
x *= 2;//result is 20 when you console.log x
// /= is division assignment	
var x = 10;
x /= 2;//result is 5 when you console.log x
// %= is remainder assignment
var x = 10;
x %= 2;//result is 0 when console.log x

//3. Comparison operators are used in logical statements to determine equality or difference between variables or values.
// == is eual to 
var x = 5; 
x == 5;//returns true or if I put var x = 8 and x == 5, it will return false
// === is strictly equal 
var x = 5
x === 5 //prints true when i console x but if i put x ==== "5" it will return false. 
// != means not equal 
var x = 5;
x != 8; // x is not equal to 8 so it returns true
// !==	not equal value or not equal type
var x = 10;
x !== "3"// x is not eual to string of 3 so it returns true
// > is greater than
var x = 8 > 2;// 8 is greater than 2 so it returns true
// < is less than
var x = 2 < 8// 2 is less than 8 so it returns true
// >= is greater than or equal to
var x = 20
x >= 15;//20 is greater than or eual to 15 so it returns true
// <= is less than or equal to 
var x = 30
x <= 50;//30 is less than or euqal to 50 so it returns true

//4. Logical operators are used to determine the logic between variables or values.
// && means and when used with Boolean values, && returns true if both operands are true; otherwise, returns false.
// || means	or when used with Boolean values, || returns true if either operand is true; if both are false, returns false.
// ! means not Returns false if its single operand that can be converted to true; otherwise, returns true

//5.A unary operator is one that takes a single operand/argument and performs an operation.
/*
*Unary plus (+)	Tries to convert the operand into a number
*Unary negation (-) *	Tries to convert the operand into a number and negates after
*Logical Not (!)	Converts to boolean value then negates it
*Increment (++)	Adds one to its operand
*Decrement (--)	Decrements by one from its operand
*Bitwise not (~)	Inverts all the bits in the operand and returns a number
*typeof	Returns a string which is the type of the operand
*delete	Deletes specific index of an array or specific property of an object
*void	Discards a return value of an expression.
*/

//6.Ternary operator
//its basically a shorter if statement 
// chris is level 100 cool
// everyone else is level 999
let name = "david";
let howCoolAmI = name === 'david' ? 100 : 999;