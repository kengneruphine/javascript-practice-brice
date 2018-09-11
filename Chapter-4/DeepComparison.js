function deepCompare(a,b){
    if(a == b){
        if (typeof a == typeof b)
        return true;
    }
    else
        return false;
}
var j = deepCompare(2, '2.3');
console.log(j);
var j = deepCompare(2, 2.3);
console.log(j);
var j = deepCompare('2', 2.3);
console.log(j);
var j = deepCompare(2,2);
console.log(j);
