
/*
    Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order. 
    solution: O(n)
*/

const swap = (first, second, array) => {
    const temp = array[first];
    array[first] = array[second]
    array[second] = temp;
}

const sort = (arr) => {
    let pointer = 0;   // index value
    arr.forEach((elem,index) => {
        if (elem === 0) {
            swap(pointer, index, arr);
            pointer++;
        }
    });

    let index = pointer;
    do {
        if (arr[index] === 1) {
            swap(pointer, index, arr);
            pointer++;
        }
        index++;
    } while (index<arr.length);
    return arr;
}


const array = [0, 1, 0, 2, 2, 2, 1, 2, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 2, 2, 2];
console.log(sort(array));