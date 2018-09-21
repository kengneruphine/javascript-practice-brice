function primitiveMultiply(numbers) {
    var unit = Number(prompt(numbers, "Unit",""));
    var multiple = Number(prompt(numbers, "Multiple", ""));
    if(!isNaN(unit) && !isNaN(multiple))
        return unit * multiple;
    throw new Error("Invalid entry");
}


for(;;) {
    try {
        var num = primitiveMultiply("Enter")
        console.log("Result ", num);
        break;
    } catch (e) {
        if (e instanceof Error)
            console.log("Invalid Entry");
        else
            throw e;
    }
}