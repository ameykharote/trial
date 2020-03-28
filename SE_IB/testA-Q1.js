//Power of Strings
/**
 * Problem Description
 * Given a array of strings A of size N and a special special string B. The power of a character is given by the frequency of a character in the special string B.
 * You have to choose a pair of strings from the array A such that absolute difference between the power of the strings is minimum
 * Power of strings is defined as the sum of al power of characters
 * Return 
 */
const B = 'rishabh';
const powerArray = B.split('').sort();
console.log(powerArray);

const findingPowerChar = (powerArray) => {

    const cleanArr = [];
    powerArray.forEach((el) => {
        if(!cleanArr[el]) {
            cleanArr[el] = 1;
        } else if (cleanArr[el]) {
            cleanArr[el] = cleanArr[el] + 1;
        }
    });
    return cleanArr;
}
console.log(findingPowerChar(powerArray));