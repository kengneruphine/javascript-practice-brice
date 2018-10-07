(function (exports) {
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    exports.month = function(number) {
        return months[number]
    };
    exports.number = function(month) {
        return months.indexOf(month);
    };
})(monthOfYear = {})

console.log(monthOfYear.month(8));
console.log(monthOfYear.number("September"));
console.log(monthOfYear.month(monthOfYear.number("September")));