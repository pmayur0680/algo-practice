
function mergeSort(arr) {
    if(arr.length <=1 ) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

// helper function to merge two sorted array
function merge(arr1, arr2) {
    let results = [];
    let i = 0; // pointer for arr1
    let j = 0; // pointer for arr2

    // run while until one array is not exhaust 
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            results.push(arr1[i]); // push smaller
            i++; // increment arr1 pointer
        } else {
            results.push(arr2[j]); // push smaller
            j++; // increment arr2 pointer            
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
var arr = [10, 2, 5, 20, 1];
console.log(mergeSort(arr));