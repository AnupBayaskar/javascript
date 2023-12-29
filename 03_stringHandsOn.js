function stringHandsOn() {
    var str = "   Hey you are doing good, keep it up    "
    console.log(`01- Given string is :-${str}`);
    console.log(`**********************************************************`);
    console.log(`02- Length of string is :- ${str.length}`);
    console.log(`**********************************************************`);
    var trimedString = str.trim();
    console.log(`03- String After Trimming :- ${str.trim()} \nLength :- ${str.trim(trimedString).length}`);
    console.log(`**********************************************************`);
   var remove = str.length-str.trim(trimedString).length
    console.log(`04- No. of space Removed :- ${remove}`);
    console.log(`**********************************************************`);
    var char1 = trimedString.charAt(0)
    var char2 = trimedString.charAt(trimedString.length-1)
    console.log(`05- First and last character Given string is :- ${char1} And ${char2}`);
    console.log(`**********************************************************`);
    console.log(`06- Total words of character in string :- ${trimedString.split(" ").length}`);
     console.log(`**********************************************************`);
    console.log(`07- The index of word "Good" in the string is :- ${trimedString.indexOf("good")}`);
     console.log(`**********************************************************`);
    console.log(`08- The substring starting from index 22 is :- \nUsing Substring :- ${trimedString.substring(22)} \nUsing Slice :- ${trimedString.slice(22)}`);
     console.log(`**********************************************************`);
    console.log(`09- Is String ends with word "up" :- ${trimedString.endsWith("up")}`);
     console.log(`**********************************************************`);
    console.log(`10- Is string Starts with word "Hey" :- ${trimedString.startsWith("Hey")}`);
     console.log(`**********************************************************`);
} 
stringHandsOn();