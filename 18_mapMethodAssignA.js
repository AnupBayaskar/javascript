const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log(`The Given Array is =>  ${arrayNumbers}`);
console.log(`Add 10 into each element in tis given Array =>`);
const arrayTrans = arrayNumbers.map( (currentValue) => {
    return currentValue + 10;
} )
console.log(arrayTrans);


console.log(`****************************  STEP 02  ************************************`);
console.log(`The Given Array is =>  ${arrayNumbers}`);
console.log(`Cube the each array element in tis given Array =>`);
const nerarr = arrayNumbers.map((currentValue)=>{
return currentValue * currentValue * currentValue
})
console.log(nerarr);
console.log(`****************************  STEP 03  ************************************`);
console.log(`The Given Array is =>  ${arrayNumbers}`);
console.log(`Add the index value into corresponding each array element in tis given Array =>`);
const addingEachIndex = arrayNumbers.map((currentValue,index)=>{
    return index+currentValue
})
console.log(addingEachIndex);
