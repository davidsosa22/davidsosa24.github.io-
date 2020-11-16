// The control flow is the order in which the computer executes statements in a script.
//Conditional statements are used to perform different actions based on different conditions.
// Code is run in order from the first line in the file to the last line, unless the computer runs across the (extremely frequent) structures that change the control flow, such as conditionals and loops. 
// if 50 is less than 100 return "hi"
if (50 < 100) {
  return ("hi");//  block of code to be executed if condition1 is true
// else if 120 is greater than 100 return "hey"
} else if (120 > 100) {
    return("hey");//  block of code to be executed if the condition1 is false and condition2 is true
//else return "leave me alone"
} else {
   return("leave me alone");//  block of code to be executed if the condition1 is false and condition2 is false
}

//switch statement is used to perform different actions based on different conditions.
function caseInSwitch(val) {
  let answer = "";
  //break is used to stop the statement for whatever value you call. Then the next statment will be excuted 
  switch (val) {
    case 1:
      return "alpha";
    //break;
    case 2:
      return "beta";
     // break;
    case 3:
      return "gamma";
     // break;
    case 4:
      return "delta";
      //break;
  }

  return answer;
}