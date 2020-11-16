// for/in - loops through the properties of an object
var me = {name:"David", name:"Palacios", age:24};

var text = "";
var x;
for (x in me) {
  text += me[x];
}
// for loops through a block of code a number of times
var i = [];//ex
for (i = 0; i < 5; i++) {//for (statement 1; statement 2; statement 3)
  i += "The number is " + i + "<br>";//code block to be executed
}
// while - loops through a block of code while a specified condition is true
//while (condition) {
  // code block to be executed
//}
while (i < 10) {
  text += "The number is " + i;
  i++;
}
//loop backwards array
  let obj = []
  for (let i = obj.length - 1; i >= 0; i--) {
    console.log(obj[i]); 
  }
//loop foward
 var i = [];//ex
for (i = 0; i < 5; i++) {//for (statement 1; statement 2; statement 3)
  i += "The number is " + i + "<br>";//code block to be executed
}

//loop through object
var me = {name:"David", name:"Palacios", age:24};

var text = "";
var x;
for (x in me) {
  text += me[x];
}
//for (statement 1; statement 2; statement 3) {
  // code block to be executed
//for (i = 0; i < 5; i++) {
 // text += "The number is " + i + "<br>";
//};

//