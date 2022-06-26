// Selection Sort: sort an array by repeatedly finding the minimum element from unsorted part of array and put it into 
// sorted part starting from beginning one at a time

// Pseudocode
// iterate over array from 0 to end
// initialize index of first element as min_index
// start inner loop j = i + 1 to end
// Compare next item in array with array[min_index]
  // if smaller set min_index to index of new smallest element found
// if new min_inde !== i, swap arr[i] with arr[min_index] and repeat until array is sorted
// return result
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min_index = i;
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[min_index]) min_index = j;
        }
        if(i !== min_index) {
            var temp = arr[i];
            arr[i] = arr[min_index];
            arr[min_index] = temp;
        }
    }
    return arr;
}
arr = [5, 3, 4, 1, 2];
console.log(selectionSort(arr));