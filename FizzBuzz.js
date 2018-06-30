var j = 0;
while (j <= 100) {
    if (j % 3 == 0 && j % 5 != 0)
        console.log("Fizz")
    else if (j % 5 == 0 && j % 3 != 0)
        console.log("Buzz")
    else if (j % 3 == 0 && j % 5 == 0)
        console.log("FizzBuzz")
    else
        console.log(j)
    j++;
}