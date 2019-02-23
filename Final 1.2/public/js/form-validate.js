const fPass = document.getElementById('p1');
const sPass = document.getElementById('p2');
const msg = document.querySelectorAll('.msg');
const matNum = document.getElementById('matNum');
fPass.addEventListener('keyup', ()=>{
    if(fPass.value.length < 5){
        msg[1].style.display = 'inline';
    }
    else if(fPass.value.length >= 5){
        msg[1].style.display = 'none';
    }
})
sPass.addEventListener('keyup', ()=>{
    if(fPass.value != sPass.value){
        msg[2].style.display = 'inline';
    }
    else{
        msg[2].style.display = 'none';
    }
})

matNum.addEventListener('keyup', () => {
    if(matNum.value.length < 8){
        msg[0].style.display = 'inline';
    }
    else if(matNum.value.length <= 1 || matNum.value.length >= 8){
        msg[0].style.display = 'none';
    }
})
