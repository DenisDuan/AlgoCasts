// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// solution two:
function anagrams(stringA, stringB) {
    comparableStrA = buildComparableStr(stringA);
    comparableStrB = buildComparableStr(stringB);
    return comparableStrA === comparableStrB;
}

// This function builds a string that's easier to be compared with
function buildComparableStr(str) {
    return str.toLowerCase().replace(/[^\w]/g, '').split('').sort().join('');
}

// Solution One: 

// function anagrams(stringA, stringB) {
//     charMapA = buildCharMap(stringA);
//     charMapB = buildCharMap(stringB);

//     if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//         return false
//     }

//     for (let key in charMapA) {
//         if (charMapA[key] !== charMapB[key]) {
//             return false
//         }
//     }

//     return true
// }

// function buildCharMap(str) {
//     var charMap = {};
//     for (let c of str.toLowerCase().replace(/[^\w]/g, '')) {
//         charMap[c] = charMap[c] + 1 || 1
//     }
//     return charMap;
// }

module.exports = anagrams;
