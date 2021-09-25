// Only change code below this line
function myCounter(n) {
    if (n >= 1){
        var arr = myCounter(n-1);
        arr.unshift(n);
        return arr
    } else {
        return [];
    }
}
// Only change code above this line

console.log(myCounter(5)); // Change this line
module.exports = myCounter;