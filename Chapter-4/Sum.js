function sum(a) {
    var total = 0;
    var tmp = a.length
    for (var iter = 1; iter <= tmp; iter++) {
        total += Number(a.pop());
    }
    return total;
}