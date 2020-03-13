// Sumation of Array without loop
const array1 = [1,2,3,4,5,6,7,8,9];

let sum = (arr, index) => {
    if(arr.length <= index) {
        return 0;
    }
    return arr[index] + sum(arr, index + 1);
}

console.log(sum(array1, 0));
