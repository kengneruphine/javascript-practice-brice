function range(a,b){
    var span = [];
    for (var iter = a; iter <= b; iter++){
        span.push(iter);
    }
    return span;
}
var j = range(23,27);
console.log(j)
function sum(a){
    var total = 0;
    var tmp = a.length
    for (var iter = 1; iter <= tmp; iter++){
        total += Number(a.pop());
    }
    return total;
}
j = sum(range(23,27))
console.log(j)