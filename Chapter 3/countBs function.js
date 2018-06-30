var j
function countBs(string) {
    var count = 0, iter;
    for (iter = 0; iter <= string.length; iter++) {
        if (string.charAt(iter) === 'B')
            count++
    }
    return count;
}
j = "This Big Bad Boys Are Bossfull"
var num;
num = countBs(j)
console.log(num)
