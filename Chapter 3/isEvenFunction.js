var j;
function isEven(tmp) {
    if (tmp >= 0) {
        if (tmp == 0)
            return "Even"
        else if (tmp == 1)
            return "Odd"
        else
            return isEven(tmp - 2)
    }
    else {
        if (tmp == 0)
            return "Even"
        else if (tmp == 1)
            return "Odd"
        else
            return isEven(tmp + 2)
    }
}


j = isEven(50)
console.log(j);
j = isEven(75)
console.log(j)
j = isEven(-50)
console.log(j)
j = isEven(-75)
console.log(j)