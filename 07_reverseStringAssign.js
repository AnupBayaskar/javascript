function reverseString(str) {
    console.log(`\nGiven string is :- "${str}"`);
  let  result = "" ;
    for (let i = str.length - 1; i >= 0; i--) {
        let char = str.charAt(i)
        if (char!=" ") {
            result = result + char; 
           
        }
    } console.log(result);
}
reverseString(`Hard work always plays back`)
reverseString(`Soon I will be UI IT Champ`)


