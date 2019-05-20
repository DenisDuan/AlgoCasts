// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


function maxChar(str) {
    const charMap = new Map();
    let maxChar = null;
    let maxCount = 0;
    
    if (str.length === 0) {
      return maxChar;
    } 
  
    str.split('').forEach( c => {
      let count = 1
      if (charMap.has(c)) {
        count = charMap.get(c) + 1
        charMap.set(c, count);
      } else {
        charMap.set(c, 1);
      }
     
      if (count > maxCount) {
        maxCount = count;
        maxChar = c;
      }
    })
  
    return maxChar;
}

module.exports = maxChar;
