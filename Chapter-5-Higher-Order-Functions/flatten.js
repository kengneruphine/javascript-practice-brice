function flatten(array, combine, start) {
    var current = [];
    for (var i = 0; i < array.length; i++) {
        current = combine(current, array[i]);
    }
    return current;
}
console.log(flatten([[1, 2, 3, 4], [5, 6], [7, 8], [9, 10, 11, 12, 13]], function (a, b) {
    return a = a.concat(b);
}, 0))
