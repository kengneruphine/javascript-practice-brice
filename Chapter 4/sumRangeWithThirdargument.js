function range(a, b, c) {
    var span = [];
    if (c === undefined) {
        c = 1;
        if (a <= b) {
            for (var iter = a; iter <= b; iter += 1) {
                span.push(iter);
            }
        }
        else {
            for (var iter = a; iter >= b; iter -= 1) {
                span.push(iter)
            }
        }
    }
    else {
        if (a <= b) {
            for (var iter = a; iter <= b; iter += c) {
                span.push(iter);
            }
        }
        else {
            for (var iter = a; iter >= b; iter -= c) {
                span.push(iter)
            }
        }
    }
    return span;
}
function sum(a) {
    var total = 0;
    var tmp = a.length
    for (var iter = 1; iter <= tmp; iter++) {
        total += Number(a.pop());
    }
    return total;
}
var j = sum(range(5, -1));
console.log(j)
j = sum(range(5, -1, 2));
console.log(j)
j = sum(range(1, 12, 3));
console.log(j)