
console.log(`************************  STEP 01  *****************************`);
const isPalindrome = function(arg){
    word=arg.toUpperCase()
    const reversWord=word.split("").reverse().join("");
    return word==reversWord?true:false;
    }
    const result = isPalindrome("madam");
    console.log(`"madam" => This Word Is Palindrome => ${result}`);
    
    const result1 = isPalindrome("dad");
    console.log(`"dad" => This Word Is Palindrome => ${result1}`);
    
    const result2 = isPalindrome("hello");
    console.log(`"hello" => This Word Is Palindrome => ${result2}`);
    
    console.log(`************************  STEP 02  *****************************`);
    const isAnagrams = (str1, str2)=>{ 
        const resultStr1 = str1.split("").sort().join("");
        const resultStr2 = str2.split("").sort().join("");
        return resultStr1==resultStr2 ? true : false;
    }
    const resultAnagram =isAnagrams("heart","earth");
    console.log(`'heart' and 'earth' are Anagram or Not => ${resultAnagram} `);
    
    const resultAnagram1 =isAnagrams("Silent","Listen");
    console.log(`'Silent' and 'Listen' are Anagram or Not => ${resultAnagram1} `);
    
    const resultAnagram2 =isAnagrams("Hello","World");
    console.log(`'Hello' and 'World' are Anagram or Not => ${resultAnagram2} `);
    
    const resultAnagram3 =isAnagrams("Such","Much");
    console.log(`'Such' and 'Much' are Anagram or Not => ${resultAnagram3} `);