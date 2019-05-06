// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// solution Two - using slice 
function chunk(array, size) {
    const chunks = [];
    let startIndex = 0;
    while (array.length > startIndex) {
        // This is too much, a nice property of slice is that: if end is greater than the length of the sequence, slice extracts through to the end of the sequence.
        // So, this code can be simply as the example solution
        let endIndex = (startIndex + size) > array.length ? array.length : startIndex + size 
        chunks.push(array.slice(startIndex, endIndex));
        startIndex = startIndex + size;
    }
    return chunks;
}
/**
 * example solution
 * 
 * 
function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}
 */

// solution One -  Keep shifting the array, and put it into a new array up to the chunck size. Push each array into a array.
function chunk_one(array, size) {
    const chunks = [];
    while (array.length > 0) {
        let chunk = [];
        for (let counter = size; counter > 0 && array.length > 0; counter--) {
            chunk.push(array.shift());
        }
        chunks.push(chunk);
    }
    return chunks;
}

module.exports = chunk;
