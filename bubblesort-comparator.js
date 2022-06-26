// bubbleSort for number without callback and string with callback
function bubbleSort(arr, comparator) {
    for (let i = arr.length; i > 0; i--) {
        let noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
                if(typeof(comparator) != 'function') {

                        if(arr[j] > arr[j + 1]) {
                            let temp = arr[j];
                            arr[j] = arr[j + 1];
                            arr[j + 1] = temp;
                            noSwaps = false;
                        }
                }
                else
                {
                  if(comparator(arr[j], arr[j + 1]) >= 0) {
                            let temp = arr[j];
                            arr[j] = arr[j + 1];
                            arr[j + 1] = temp;
                            noSwaps = false;
                  }                   
                }
        }
        if(noSwaps) break;
    }   
      
    return arr;
}

//arr = [5, 3, 4, 1, 2];
var arr = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
console.log(bubbleSort(arr, function strCmp(a, b) {
    if(a < b) return -1;
    else if(a > b) return 1;
    return 0;
}));