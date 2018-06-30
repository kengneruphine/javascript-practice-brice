var j;
function countChar(string, c) {
    var count = 0, iter;
    for (iter = 0; iter <= string.length; iter++) {
        if (c === string.charAt(iter))
            count++
    }
    return count;
}
j = "This is is si the best day of my life it truely is"
num = countChar(j, 'i')
console.log(num)