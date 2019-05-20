// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(integer) {
    if (integer === 0) return 0;
    
    const reversedInt = parseInt(Math.abs(integer).toString().split('').reverse().join(''));
    if (integer > 0 ) {
        return reversedInt;
    }
    return reversedInt * -1;
}

module.exports = reverseInt;
