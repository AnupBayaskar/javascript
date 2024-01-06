console.log(`**************************=[ STEP 01 ]=*****************************`);
let str = "I am Very good IT Developer"
console.log(`Given String is :- "I am Very good IT Developer"`);
let vowelsCount = 0;

for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i).toLowerCase();
if ( char=="a"||char=="e"||char=="i"||char=="o"||char=="u") {
    vowelsCount = vowelsCount + 1
}
}
console.log(`Total No. of vowelsCount in given String is :- ${vowelsCount}`);
console.log(`**************************=[ STEP 02 ]=*****************************`);
function sumOfCubeOfNo() {
    let sum = 0
for (let i = 1; i <= 5; i++) {
   sum = sum+i*i*i;
}
console.log(`Total Sum Of 1 to 5 number cube is :-${sum}`);
}
sumOfCubeOfNo()
console.log(`**************************=[ STEP 03 ]=*****************************`);

function oddPositionChar(str1) {
    console.log(`\nGiven string is :- "${str1}"` );
for (let i = 0; i < str1.length; i++) {
    let char = str1.charAt(i)
        if (i%2==1 && char != " ") {
        console.log(char);
    }
} 

}
oddPositionChar(`Hard work always plays back`)
oddPositionChar(`Soon I will be UI IT Champ`)