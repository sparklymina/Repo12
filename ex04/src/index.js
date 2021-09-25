// Only change code below this line
function sumFibonacci(num) {
    function fibonacciRecursion (n, m, sum) {
        if (num === 1) {
            return sum;
        }
        if (num < 0) {
            return 0;
        }
        if (m <= num ){
            if (m%2 !== 0) {
                sum += m;
            }
            m = m+n;
            n = m-n;
            return fibonacciRecursion(n, m, sum)
        } else {
            return sum;
        }
    }
    return fibonacciRecursion(1,1,1);
}
// Only change code above this line

console.log(sumFibonacci(20)); // Change this line
module.exports = sumFibonacci();