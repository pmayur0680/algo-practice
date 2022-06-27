// The array is virtually split into a sorted and an unsorted part. Values from the unsorted 
// part are picked and placed at the correct position in the sorted part. Works best with  partially sorted.
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > key; j--) {
            arr[j + 1] = arr[j];   
        }
        arr[j + 1] = key;
    }
    return arr;
}