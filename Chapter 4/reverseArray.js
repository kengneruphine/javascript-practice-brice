function reverseArray(a){
    var newA = [];
    for (var iter = a.length -1;iter >= 0; iter--){
        newA.push(a[iter]);
    }
    return newA;
}
var j = [4,3,2,1];
var rev = reverseArray(j);
console.log(rev);