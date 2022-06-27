function swap(array, i, j) {
    var temp = array[i]
    array[i] = array[j];
    array[j] = temp;
}

function pivot(arr, comparator, start=0, end=arr.length - 1){
  // good luck!
  var pivot = arr[start]; 
    var swapIndex = start;

    for (let i = start + 1; i < arr.length; i++) {
         if(typeof(comparator) != 'function') {
            if(pivot > arr[i]) { 
                swapIndex++; 
                swap(arr, swapIndex, i);
            }
         } else {
            if(comparator(pivot, arr[i]) > 0){ 
                swapIndex++; 
                swap(arr, swapIndex, i);
            }
         }
    }
    swap(arr, start, swapIndex); 
    return swapIndex;   

}

function quickSort(arr, comparator, left = 0, right = arr.length - 1) {
    if(left < right) {
    let pivotIndex = pivot(arr, comparator, left, right);
    // left
    quickSort(arr, comparator, left, pivotIndex - 1); // not include pivotIndex
    // right
    quickSort(arr, comparator, pivotIndex + 1, right);
    }
    return arr;
}