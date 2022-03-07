// with input method
function missingNumber(numArr) {
    const completeArray = [1,2,3,4,5,6,7,8,9];
    let output = [];
    if(JSON.stringify(completeArray) == JSON.stringify(numArr)){
      console.log("it works")  
    }
}
missingNumber([1,2,3,4,5,6,7,8,9]);

module.exports = missingNumber

// without method
// function missingNumber(numArr) {
//     let allNumbers = [1,2,3,4,5,6,7,8,9];
//     let result = null;
//     for (let i = 0; i < allNumbers.length;  i++){
//         console.log(allNumbers[i]);
//      for (let j = 0; j < numArr.length; j++){
//          console.log(numArr[i]);
//          if (allNumbers[i] == numArr[j]){
//              result = "Anita Toto";
//          } else {
//              result = "Benita sweet pussy";
//          }
//      }
//      return result;
// }
// }
// missingNumber([1,2,3,4,5,6,7,8,9]);
// // module.exports = missingNumber
// // console.log("I am working");