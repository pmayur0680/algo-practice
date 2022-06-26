// Bubble sort works by repeatedly swaping the adjacement elements if they are in wrong order.
// This algorithm is not suitable for large data sets as its average and worst cast time complexity
// is quadratic

// Pseudocode
// 1. Iterate over array from end to 0
// 2. set noswap = true
// 3. Start inner loop j from 0 to < i - 1
// 4. if arr[j] > arr[j + 1] - swap, set noswap = false
// 5. if no swap outside inner loop break as array is already sorted
// 6. return sorted arrray
function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        let noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }   
    return arr;
}

arr = [5, 3, 4, 1, 2];
console.log(bubbleSort(arr));