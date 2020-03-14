//1. Sumation of Array without loop and built in functions
/**
 * Created with the help of Recursion
 * The method will keep calling itself for the no of elements in array and end termination will return 0
 * all the elements then will be add
 * return 1 + 2 + 3 + 4 + 5 + 0
 * This will be returned in the end
 */
const array = [1,2,3,4,5];

let sum = (arr, index) => {
    if(arr.length <= index) {
        return 0;
    }
    return arr[index] + sum(arr, index + 1);
}
console.log(sum(array, 0));
//O/P : 15

//2. Search element in a array
/**
 * Method created with the help of Linear search.
 * for the loop it will run and then with it finds same element in the array
 * It will return the position of that number.
 */
const arr1 = [1,3,2,5,6];
const arr2 = [1,2,3,5,6];

let findElement = (arr, n , el) => {
    
    for (let i = 0; i < n; i++) {
        if (arr[i] === el) {
            return console.log(`Element found at position ${i}`);
        } 
    }
    return console.log("Element not found"); 
}
console.log(findElement(arr1, arr1.length, 5));
console.log(findElement(arr2, arr2.length, 3));
//O/P:Element found at position 3
//    Element found at position 2


//3. Check if el is even, if even then find binary equivalent & check if that is palindrome. If yes then print

const a = [1,2,3,4,5,6,7,8,9];

//check if even
/**
 * Checking whether the number is even or not by
 * Dividing the number by 2.
 * If the remainder is zero the num is even
 * Sending the even number array 
 */
function checkEven(arr) {

    const arrEven = [];
    
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] % 2 === 0) {           
            arrEven.push(`${arr[i]}`);
        }
    }
    console.log(arrEven);
    checkBinary(arrEven);
}

//find binary equivalent
/**
 * Converting the Decimal even number from the array into binary
 * and sending that binary array 
 */
function checkBinary(arr) {
    let arrBinary = [];

    for(let i = 0; i < arr.length; i++) {
        arrBinary[i] = parseInt(arr[i],10).toString(2);
    }

    console.log(arrBinary);
    checkPalindrome(arrBinary);
}

//Checking if the binary equivalent is Palindrome or not
/**
 * Reverse the binary representation and then 
 * comparing it with itself to check whether it is palindrome or not
 */
const checkPalindrome = (arr) => {
    const revArr = [];

    for(let i = 0; i < arr.length; i++) {
        revArr[i] = arr[i].split('').reverse().join('');
        if(revArr[i] === arr[i]) {
            console.log(`${parseInt(arr[i],2).toString(10)}'s binary representation is a Palindrome`);
        }
        return console.log('No number\'s binary representation from the array is a Palindrome');
        
    }
}
checkEven(a);

//Consider a wall clock find the No. Of times the minute hand and hour hand overlaps
//A. For 12 hours how many times,
//B. For 24 hours how many times

/*If in x hours, the minute hand completes x rounds.
same time the hour hand completes x/12 laps.
first time the minute and hour hands overlap, the minute hand has completed 1 round more than hour hand.
x = x/12 + 1.
second time they overlap, the minute hand would have completed two more rounds than the hour hand
for n overlaps, x/12 + n

for 24 hours,
x = x/12 + n
24 = 24/12 + n
24 = 2 + n
n = 22.

So for 12 hours. half of the number = 11
*/
