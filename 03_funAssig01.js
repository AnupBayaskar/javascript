console.log("*********************  STEP 01  *********************");
function sub(x1, x2) {
  console.log("Given no are :-", x1, x2);
  var result = x1 - x2;
  return result;
}
var returnValue = sub(26, 5);
console.log("Subtraction is given no :- ", returnValue);

function division(y1, y2) {
  console.log("Given no are :-", y1, y2);
  var result = y1 / y2;
  return result;
}
var returnValue = division(14, 2);
console.log("Division is given no :-", returnValue);
console.log("*********************  STEP 02  *********************");
function personalDetails(firstName, lastName, collegeName) {
  console.log(
    "First Name :",
    firstName,
    "\nLast Name :",
    lastName,
    "\nCollege Name :",
    collegeName,
    "\n"
  );
}
personalDetails("Anup", "Bayaskar", "R S college Paradh");
console.log("*********************  STEP 03  *********************");
function swapValues(v1,v2) {
   console.log("***Befor swap***","\n Value 1 :-",v1,"\n Value 2 :-",v2);
   var temp = v1;
   v1 = v2;
   v2 = temp;
   console.log("***After swap***","\n Value 1 :-",v1,"\n Value 2 :-",v2);
}
swapValues("Virat","Anushka");
swapValues(1000,2000);
console.log("*********************  STEP 04  *********************");
function addThreeValues(x1,x2,x3) {
    console.log("1st Value :-",x1,"\n 2nd Value :-",x2,"\n 3rd Value :-",x3);
    var result = x1+x2+x3;
   return result;
}
var returnValue = addThreeValues(10.23,600,40);
console.log("Addition of Given values :-",returnValue);
var returnValue = addThreeValues("hello","Good","Morning");
console.log("Addition of Given values :-",returnValue);




