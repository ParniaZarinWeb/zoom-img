const img1 = "assets/img/1.jpg"
const img2 = "assets/img/2.webp"
const img3 = "assets/img/3.jpg"
const img4 = "assets/img/4.jpg"


const btn1 = document.querySelector('.img1')
const btn2 = document.querySelector('.img2')
const btn3 = document.querySelector('.img3')
const btn4 = document.querySelector('.img4')
const img = document.querySelector('#main-img')


btn1.addEventListener('click', show1)
btn2.addEventListener('click', show2)
btn3.addEventListener('click', show3)
btn4.addEventListener('click', show4)



function show1() {
    img.setAttribute('src', img1)
}

function show2() {
    img.setAttribute('src', img2)
}

function show3() {
    img.setAttribute('src', img3)
}

function show4() {
    img.setAttribute('src', img4)
}


const plus = document.getElementById('increase');
const minus = document.getElementById('decrease');
const qty = document.getElementById('qty');

plus.addEventListener('click', addOne);
minus.addEventListener('click', minusOne);

function addOne() {
    let num = parseInt(qty.value);
    qty.value = num + 1;
}

function minusOne() {
    let num = parseInt(qty.value);
    if (num > 1) {
        qty.value = num - 1;
    }
}

