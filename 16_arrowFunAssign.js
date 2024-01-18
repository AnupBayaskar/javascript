console.log(`*************************  STEP 01  ****************************`);
const arrow = () =>{
console.log("Good Morning , Today is Thursday");
}
arrow();
console.log(`*************************  STEP 02  ****************************`);
const mult = (n1,n2,n3=1) => {
const result = n1*n2*n3
console.log(`multiplication of given value is => ${result}`);
}
mult(5,5,2)
mult(10,4)
console.log(`*************************  STEP 03  ****************************`);

const add = (n1,n2,n3,n4,n5) => {
    const result = n1+n2+n3+n4+n5
    console.log(`addition of given value is => ${result}`);
    }
    add(100,100,200,349,756)
    add("I am ","Learning ","ES6 ","Features ","In Dept")
