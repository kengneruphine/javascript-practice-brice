var l2 = document.querySelectorAll('.level2');
var l3 = document.querySelectorAll('.level3');
var l4 = document.querySelectorAll('.level4');
var l5 = document.querySelectorAll('.level5');
var lvl2 = document.querySelectorAll('.lvl2');
var lvl3 = document.querySelectorAll('.lvl3');
var lvl4 = document.querySelectorAll('.lvl4');
var lvl5 = document.querySelectorAll('.lvl5');
console.log(l3)

lvl2[0].addEventListener('click' , ()=>{
    l2[0].style.display = 'inline';
    l3[0].style.display = l4[0].style.display = l5[0].style.display = 'none';
    l2[1].style.display = l3[1].style.display = l4[1].style.display = l5[1].style.display = 'none';
    l3[2].style.display = l2[2].style.display = l4[2].style.display = l5[2].style.display = 'none';
})

lvl3[0].addEventListener('click' , ()=>{
    l3[0].style.display = 'inline';
    l2[0].style.display = l4[0].style.display = l5[0].style.display = 'none';
    l2[1].style.display = l3[1].style.display = l4[1].style.display = l5[1].style.display = 'none';
    l3[2].style.display = l2[2].style.display = l4[2].style.display = l5[2].style.display = 'none';
})

lvl4[0].addEventListener('click' , ()=>{
    l4[0].style.display = 'inline';
    l3[0].style.display = l2[0].style.display = l5[0].style.display = 'none';
    l2[1].style.display = l3[1].style.display = l4[1].style.display = l5[1].style.display = 'none';
    l3[2].style.display = l2[2].style.display = l4[2].style.display = l5[2].style.display = 'none';
})

lvl5[0].addEventListener('click' , ()=>{
    l5[0].style.display = 'inline';
    l3[0].style.display = l4[0].style.display = l2[0].style.display = 'none';
    l2[1].style.display = l3[1].style.display = l4[1].style.display = l5[1].style.display = 'none';
    l3[2].style.display = l2[2].style.display = l4[2].style.display = l5[2].style.display = 'none';
})

lvl2[1].addEventListener('click' , ()=>{
    l2[1].style.display = 'inline';
    l3[1].style.display = l4[1].style.display = l5[1].style.display = 'none';
    l3[0].style.display = l4[0].style.display = l5[0].style.display = l2[0].style.display = 'none';
    l3[2].style.display = l2[2].style.display = l4[2].style.display = l5[2].style.display = 'none';
})

lvl3[1].addEventListener('click' , ()=>{
    l3[1].style.display = 'inline';
    l2[1].style.display = l4[1].style.display = l5[1].style.display = 'none';
    l3[0].style.display = l4[0].style.display = l5[0].style.display = l2[0].style.display = 'none';
    l3[2].style.display = l2[2].style.display = l4[2].style.display = l5[2].style.display = 'none';
})

lvl4[1].addEventListener('click' , ()=>{
    l4[1].style.display = 'inline';
    l3[1].style.display = l2[1].style.display = l5[1].style.display = 'none';
    l3[0].style.display = l4[0].style.display = l5[0].style.display = l2[0].style.display = 'none';
    l3[2].style.display = l2[2].style.display = l4[2].style.display = l5[2].style.display = 'none';
})

lvl5[1].addEventListener('click' , ()=>{
    l5[1].style.display = 'inline';
    l3[1].style.display = l4[1].style.display = l2[1].style.display = 'none';
    l3[0].style.display = l4[0].style.display = l5[0].style.display = l2[0].style.display = 'none';
    l5[2].style.display = l3[2].style.display = l4[2].style.display = l2[2].style.display = 'none';
})

lvl2[2].addEventListener('click' , ()=>{
    l2[2].style.display = 'inline';
    l3[2].style.display = l4[2].style.display = l5[2].style.display = 'none';
    l3[0].style.display = l4[0].style.display = l5[0].style.display = l2[0].style.display = 'none';
    l2[1].style.display = l3[1].style.display = l4[1].style.display = l5[1].style.display = 'none';
})

lvl3[2].addEventListener('click' , ()=>{
    l3[2].style.display = 'inline';
    l2[2].style.display = l4[2].style.display = l5[2].style.display = 'none';
    l3[0].style.display = l4[0].style.display = l5[0].style.display = l2[0].style.display = 'none';
    l2[1].style.display = l3[1].style.display = l4[1].style.display = l5[1].style.display = 'none';
})

lvl4[2].addEventListener('click' , ()=>{
    l4[2].style.display = 'inline';
    l3[2].style.display = l2[2].style.display = l5[2].style.display = 'none';
    l3[0].style.display = l4[0].style.display = l5[0].style.display = l2[0].style.display = 'none';
    l2[1].style.display = l3[1].style.display = l4[1].style.display = l5[1].style.display = 'none';
})

lvl5[2].addEventListener('click' , ()=>{
    l5[2].style.display = 'inline';
    l3[2].style.display = l4[2].style.display = l2[2].style.display = 'none';
    l3[0].style.display = l4[0].style.display = l5[0].style.display = l2[0].style.display = 'none';
    l2[1].style.display = l3[1].style.display = l4[1].style.display = l5[1].style.display = 'none';
})

// lvl2[3].addEventListener('click' , ()=>{
//     l2[3].style.display = 'inline';
//     l3[3].style.display = l4[3].style.display = l5[3].style.display = 'none';
//     l3[0].style.display = l4[0].style.display = l5[0].style.display = l2[0].style.display = 'none';
//     l2[1].style.display = l3[1].style.display = l4[1].style.display = l5[1].style.display = 'none';
//     l3[2].style.display = l2[2].style.display = l4[2].style.display = l5[2].style.display = 'none';
// })

// lvl3[3].addEventListener('click' , ()=>{
//     l3[3].style.display = 'inline';
//     l2[3].style.display = l4[3].style.display = l5[3].style.display = 'none';
//     l3[0].style.display = l4[0].style.display = l5[0].style.display = l2[0].style.display = 'none';
//     l2[1].style.display = l3[1].style.display = l4[1].style.display = l5[1].style.display = 'none';
//     l3[2].style.display = l2[2].style.display = l4[2].style.display = l5[2].style.display = 'none';
// })

// lvl4[3].addEventListener('click' , ()=>{
//     l4[3].style.display = 'inline';
//     l3[3].style.display = l2[3].style.display = l5[3].style.display = 'none';
//     l3[0].style.display = l4[0].style.display = l5[0].style.display = l2[0].style.display = 'none';
//     l2[1].style.display = l3[1].style.display = l4[1].style.display = l5[1].style.display = 'none';
//     l3[2].style.display = l2[2].style.display = l4[2].style.display = l5[2].style.display = 'none';
// })

// lvl5[3].addEventListener('click' , ()=>{
//     l5[3].style.display = 'inline';
//     l3[3].style.display = l4[3].style.display = l2[3].style.display = 'none';
//     l3[0].style.display = l4[0].style.display = l5[0].style.display = l2[0].style.display = 'none';
//     l2[1].style.display = l3[1].style.display = l4[1].style.display = l5[1].style.display = 'none';
//     l3[2].style.display = l2[2].style.display = l4[2].style.display = l5[2].style.display = 'none';
// })