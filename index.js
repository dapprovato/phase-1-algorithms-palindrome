function isPalindrome(word) {
  // Write your algorithm here
  let splitWord =  word.split("")
  let reverseWord = splitWord.reverse()
  let joinWord = reverseWord.join("")

  if (joinWord === word) {
    return true
  } else return false
}

/* 
  Add your pseudocode here
  initialize function
  check possible applicable syntax , needing to reverse a string
  turn string to array , reverse array , join back together!
  if stmnt for T or F
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
