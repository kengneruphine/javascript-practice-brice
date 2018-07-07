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
var j = range(5, -1)
console.log(j)
j = range(5, -1, 2)
console.log(j)
j = range(1, 12, 3)
console.log(j)