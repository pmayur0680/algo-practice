// The array is virtually split into a sorted and an unsorted part. Values from the unsorted 
// part are picked and placed at the correct position in the sorted part. Works best with  partially sorted.
function insertionSort(arr, comparator) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        if(typeof(comparator) != 'function') {
        for (var j = i - 1; j >= 0 && arr[j] > key; j--) {
            arr[j + 1] = arr[j];   
        }
        } else {
            for (var j = i - 1; j >= 0 && comparator(arr[j], key) >= 0; j--) {
                arr[j + 1] = arr[j];   
            }   
        }
        arr[j + 1] = key;
    }
    return arr;
}
var arr = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
console.log(insertionSort(arr, function strCmp(a, b) {
    if(a < b) return -1;
    else if(a > b) return 1;
    return 0;
}));