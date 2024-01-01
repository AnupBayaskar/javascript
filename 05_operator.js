console.log(`****************** STEP 01 ************************`);
function squareOfWordLength(str) {
    var result = str.length;
    console.log(
      `The Given word is => ${str}\n The Length of Word is => ${
        str.length
      }, The squre of Length is ${str.length * result}.`
    );
    console.log(" ");
  }
  squareOfWordLength("JavaScript");
  squareOfWordLength("Google Chrome");
  squareOfWordLength("Developer Smart");

  console.log(`****************** STEP 02 ************************`);

  function dev() {
    var str = "I am Anguler Developer"
   var  strlength = str.length
    console.log(`The Given String length is :- ${strlength}`);
    var word = str.split(" ").length
    console.log(`Total No.word in Given String :- ${word}`);
    console.log(`Divide total no. of words in string :- ${strlength/word}`);
    console.log(`Multiple total no. of words in string :- ${strlength*word}`)
  }
 dev();