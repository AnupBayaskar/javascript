console.log(`---------------------------------------------Remove duplicate ele using for----------------------------------------------------`);
const arrayNum=[11,3,4,11,4,7,3];
console.log(`Original array is :=> [${arrayNum}]`);
for ( let i = 0; i < arrayNum.length ; i++) {
    for( let j=i+1 ; j <= arrayNum.length; j++){
        if(arrayNum[i]==arrayNum[j]){
            arrayNum.splice(j,1)
        }
    }
}
 console.log(`After removing Duplicate element from array is => [${arrayNum}]`);

 console.log(`----------------------------------------------------------------step 2---------------------------------------------------------`);

 const str = "How are you mate";
 console.log(`Original String is => "${str}"`);
 let resultString = "";
 
 for (let i = 0; i < str.length; i++) {
   if (i==0 || i== str.length-1) {
        resultString += str[i].toUpperCase();     
   } else if(str[i-1]==" " || str[i+1]==" "){
    resultString += str[i].toUpperCase();                          
   }else{
        resultString += str[i].toLowerCase();
    }
 }
 console.log(`Result of sting => "${resultString}"`);

 console.log(`----------------------------------------------------------------End------------------------------------------------------------`);
 

  
