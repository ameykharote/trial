//Scaler Entrance Examination Test A

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