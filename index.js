function findMinAndRemoveSorted(array) {
    let smallest = array[0];
    let index = 0;

    for(let i = 1; i < array.length; i++) {
        if(array[i] < smallest) {
            smallest = array[i]
            index = i
        }
    }
    array.splice(index, 1)
    return smallest;
}

function merge(array1, array2) {
    let mergedArray = [];

    while(array1.length !== 0 && array2.length !== 0) {
        let first = array1[0];
        let second = array2[0]
        if(first < second) {
            mergedArray.push(first);
            findMinAndRemoveSorted(array1);
        } else {
            mergedArray.push(second);
            findMinAndRemoveSorted(array2);
        }
    }
    return mergedArray.concat(array1).concat(array2);
}

function mergeSort(array) {
    let midpoint = array.length / 2
    let firstHalf = array.slice(0, midpoint);
    let secondHalf = array.slice(midpoint, array.length)

    if(array.length < 2) {
        return array;
    } else {
        return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
}