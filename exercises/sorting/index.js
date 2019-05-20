// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {

    const swap = (arr, idxA, idxB) => [arr[idxA], arr[idxB]] = [arr[idxB], arr[idxA]];

    for (let i = arr.length - 1; i > 1; i--) {
        let isSwaped = false;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
                isSwaped = true
            }
        }

        if (!isSwaped) {
            break;
        }
    }

    return arr;
}

function selectionSort(arr) {

}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
