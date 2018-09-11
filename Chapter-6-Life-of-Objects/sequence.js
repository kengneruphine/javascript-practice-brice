      /* Sequence Interface */

function sequence(data) {
    var info = data;
    var i = 0;
    function iterString() {
        if(info instanceof Array)
            info = info.join('');
        else
            info = info.toString();
        var len = info.length
        if (i <= len){
            return(info.charAt(i))
            i+=1;
        }
    }
}

/*function LogFive(seqObj) {
    var i = 0
    if (i <= 5) {
        console.log(seqObj)
    }
}
console.log(LogFive(sequence([1,2,3,4,5,6,7,8,9,10,11,12,13])))

*/
//Incomplete

