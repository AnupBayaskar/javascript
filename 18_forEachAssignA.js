const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601]

console.log(`************************* STEP 01 *******************************`);
console.log(`The Given Array Is =>  ${arrayNumbers}`);
arrayNumbers.forEach((element, index) => {
    console.log(`${index} ==> ${element}`);
  });
console.log(`************************* STEP 02 *******************************`);
console.log(`The Given Array Is =>  ${arrayNumbers}`);
console.log(`The Positive numbers in this Given Array =>`)
arrayNumbers.forEach( (element)=>{
if (element>=0) {
    console.log(element);
    ;}
})

console.log(`************************* STEP 03 *******************************`);
console.log(`The Given Array Is =>  ${arrayNumbers}`);
console.log(`The Negative numbers Array is From Given Array =>`)
negativeArray = []
 arrayNumbers.forEach((element)=>{
if (element<0) {
    negativeArray.push(element);
}
 })
 console.log(negativeArray);

console.log(`************************* STEP 04 *******************************`);
console.log(`The Given Array Is =>  ${arrayNumbers}`);
console.log(`The Even numbers From this Given Array =>`)
arrayNumbers.forEach((element)=>{
if (element%2==0) {
    console.log(element);
}
})
console.log(`************************* STEP 05 *******************************`);
console.log(`The Given Array Is =>  ${arrayNumbers}`);
console.log(`The sum of all numbers From this Given Array =>`)
sum=0
arrayNumbers.forEach((element) => {
    sum = sum+element
});
console.log(sum);
console.log(`************************* STEP 06 *******************************`);
console.log(`The Given Array Is =>  ${arrayNumbers}`);
console.log(`The Even indexed value From this Given Array =>`)
arrayNumbers.forEach((value, index)=>{
if (index%2==0) {
    console.log(`${index} => ${value}`);
}
})