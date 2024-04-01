//Write a JavaScript function that accepts two numbers to generate an array between them. For example, if the two numbers are 4 and 7, the output should be [4, 5, 6, 7] and -4 and 7 should return [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7].
//make a function name that takes minNum and maxNum as input
function array(minNum, maxNum) {
  //make a variable that has an empty array
  let emptyArray = [];
  //make a for condition that loops from minNum to maxNum
  for (let i = minNum; i <= maxNum; i++) {
    //use .push to add to the empty array
    emptyArray.push(i);
  }
  //returns a new array
  return emptyArray;
}
console.log(array(4, 7)); //the output
