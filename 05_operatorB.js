
console.log("--------------------------------------------------Step 1-------------------------------------------------------\n");

function graterNumber(num1,num2){
    console.log(`Given nos are : ${num1}, ${num2}`);
    var result=num1>num2 ?`"${num1}" is greater than "${num2}"`:`"${num2}" is greater than "${num1}"`;
    console.log(`${result}\n`);
}
graterNumber(10,-10);

graterNumber(800,899);

console.log("--------------------------------------------------Step 2-------------------------------------------------------\n");

function isEvenOrOddNum(num1){

    console.log(`Given no is "${num1}" we have to check is Even Or Odd`);
    var check=num1%2==0? `true (Given no is "EVEN")` :  `false (Given no is "ODD")`;
    return check;
}
var result;
result=isEvenOrOddNum(29);
console.log(`${result}\n`);

result=isEvenOrOddNum(44);
console.log(`${result}\n`);

result=isEvenOrOddNum(0);
console.log(`${result}\n`);

result=isEvenOrOddNum(101);
console.log(`${result}\n`);

console.log("--------------------------------------------------Step 3-------------------------------------------------------\n");

function wordLength(str1){
 var strLen=str1.length;
 console.log(`Given Word is '${str1}' and it's Length is '${strLen}'`);
 var check=strLen%2==0?`EVEN`:`ODD`;
 return check;   
}
var result;
result=wordLength("JavaScript");
console.log(`Word has '${result}' length \n`);

result=wordLength("Developer");
console.log(`Word has '${result}' length \n`);

result=wordLength("Google");
console.log(`Word has '${result}' length \n`);

console.log("--------------------------------------------------End----------------------------------------------------------\n");
