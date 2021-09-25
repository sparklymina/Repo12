// Only change code below this line
function rangeOfNumbers(startN, endN) {
    if (startN > endN) {
        return "The starting number will always be less than or equal to the ending number";
    }
    if (startN === endN) {
            return [startN];
        } else {
            var numbers = rangeOfNumbers(startN, endN - 1);
            numbers.push(endN);
            return numbers;
        }
    return countArray
}
// Only change code above this line

console.log(rangeOfNumbers(5, 7)); //Change this number
module.exports = rangeOfNumbers;