var num = /(\+|-)?(\d+)?(\.)?(\d+)?(e|E)?(\+|-)?(\d+)?(\d+)?[^\.]/;
//var num = /\.(\d+)/
var test1 = ".";
var test2 = .5;
var test3 = 5.;
var test4 = -.5;
var test5 = 5e-3;
var test6 = 1E10;
var test7 =  10.5e12;
console.log(num.test(test1));
console.log(num.test(test2));
console.log(num.test(test3));
console.log(num.test(test4));
console.log(num.test(test5));
console.log(num.test(test6));
console.log(num.test(test7));
