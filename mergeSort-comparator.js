
function mergeSort(arr, comparator) {
    if(arr.length <=1 ) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid), comparator);
    let right = mergeSort(arr.slice(mid), comparator);
    return merge(left, right, comparator);
}

// helper function to merge two sorted array
function merge(arr1, arr2, comparator) {
    let results = [];
    let i = 0; // pointer for arr1
    let j = 0; // pointer for arr2

    // run while until one array is not exhaust 
    while(i < arr1.length && j < arr2.length) {
        if(typeof(comparator) != 'function') {
        if(arr1[i] < arr2[j]) {
            results.push(arr1[i]); // push smaller
            i++; // increment arr1 pointer
        } else {
            results.push(arr2[j]); // push smaller
            j++; // increment arr2 pointer            
        }
        } else {
            if(comparator(arr1[i], arr2[j])<=0) {
                results.push(arr1[i]); // push smaller
                i++; // increment arr1 pointer
            } else {
                results.push(arr2[j]); // push smaller
                j++; // increment arr2 pointer            
            }  
        }
    } 
        // if arr2 exhaust and arr1 has remaining
        while(i < arr1.length) {
            results.push(arr1[i]);
            i++;
        }
        // if arr1 exhaust and arr2 has remaining
        while(j < arr2.length) {
            results.push(arr2[j]);
            j++;
        }    


    return results;
}
var arr = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
console.log(mergeSort(arr, function strCmp(a, b) {
    if(a < b) return -1;
    else if(a > b) return 1;
    return 0;
}));