      /* Sequence Interface */

function sequence(data) {
    var info = data;
    var string = '';
    if(info instanceof Array) {
        for (var i = 0; i < info.length; i++){
            string = string.concat(info[i]);
        }
        return(string);
    }
    else{
        string = info.toString();
        return(string)
    }
}
//console.log(sequence([1,23,3,45]))
function logFive(seqObj) {
    var i = 0;
    var info = seqObj;
        while (i < 5){
            if(info.charAt(i))
                console.log(info.charAt(i));
            i++;
    }
    
}
logFive(sequence([1, 2 ,3, 4, 5, 6, 7]));
console.log('\n');
logFive(sequence('I am a girl'));
console.log('\n');
logFive(sequence(123));