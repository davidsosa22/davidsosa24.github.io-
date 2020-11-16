//1.The with statement extends the scope chain for a statement.
/*with (expression)
  statement
*/
// The with statement can help reduce file size by reducing the need to repeat a lengthy object reference without performance penalty.
// var a, x, y;
// var r = 10;

// with (Math) {
//   a = PI * r * r;
//   x = r * cos(PI);
//   y = r * sin(PI / 2);
// }




//2.String methods help you to work with strings.

//The length property returns the length of a string:
var txt = "me";
var sln = txt.length;//returns length of string me

//The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");

//The search() method searches a string for a specified value and returns the position of the match:
var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");

//slice() extracts a part of a string and returns the extracted part in a new string.
var str = "me, you, i";
var res = str.slice(3);//returns you, i

//substring() is similar to slice(). The difference is that substring() cannot accept negative indexes.

//The replace() method replaces a specified value with another value in a string:
str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");//returns Please visit Microsoft!

//A string is converted to upper case with toUpperCase():
var text1 = "Hello World!";       // String
var text2 = text1.toUpperCase();  // text2 is text1 converted to upper

//concat() joins two or more strings:
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);

//The trim() method removes whitespace from both sides of a string:
//var str = "       Hello World!        ";
//alert(str.trim());

//The charAt() method returns the character at a specified index (position) in a string:
var str = "HELLO WORLD";
str.charAt(0);            // returns H

//A string can be converted to an array with the split() method:
var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas