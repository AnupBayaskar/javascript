const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45]
console.log(`The Given Array is :- [${arrayRollNumbers}]`);
console.log(``);
console.log(`*************************** STEP 01 **************************`);

arrayRollNumbers.reverse();
console.log(`Given Array After Reversing is :- [${arrayRollNumbers}]`);
console.log(`*************************** STEP 02 **************************`);
// console.log(`The Given Array is :- [${arrayRollNumbers}]`);
arrayRollNumbers.sort();
console.log(`Given Array After Sorting :- [${arrayRollNumbers}]`);
console.log(`*************************** STEP 03 **************************`);
// console.log(`The Given Array is :- [${arrayRollNumbers}]`);
arrayRollNumbers.sort((a,b)=>{
    return a>b?1:-1;
})
console.log(`The Given Array After Ascending Order:- [${arrayRollNumbers}]`);
console.log(`*************************** STEP 04 **************************`);
// console.log(`The Given Array is :- [${arrayRollNumbers}]`);
const greatestNo = arrayRollNumbers[arrayRollNumbers.length-1]
console.log(`The Given Array in Gretest Element :-  ${greatestNo}`);
console.log(`*************************** STEP 05 **************************`);
// console.log(`The Given Array is :- [${arrayRollNumbers}]`);
const smallestNo = arrayRollNumbers[0]
console.log(`The Given Array in Smallest Element :- ${smallestNo}`);
console.log(`*************************** STEP 06 **************************`);
// console.log(`The Given Array is :- [${arrayRollNumbers}]`);
const uniqArray = [...new Set(arrayRollNumbers)]
console.log(`The Given Array in Remove Dublicates Element :-[${uniqArray}]`);

