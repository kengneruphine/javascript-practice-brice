function reverseArrayInPlace(a){
    var tmp;
    for (var iter = a.length -1; iter >= 0;iter--){
        a.push(a[iter]);
        delete a[iter];
    }
    a.splice(0,a.length/2)
    return a;
}
var j = [9,8,7,6,5,4, 3, 2, 1];
var rev = reverseArrayInPlace(j);
console.log(rev);
/*I expect the reverseArray function to be more useful than the 
reverseArrayInPlace. This is because with the first function if 
we still want to use the original array it is possible  and fas-
ter than to still reverse the array again and waste memory */