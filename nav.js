const navBox = document.getElementById('nav-box');
const navBox2 = document.getElementById('fake-nav-cont');
const hamBurger = document.getElementById('ham-btn');
const hamLine = document.getElementsByClassName('ham-line');


hamBurger.onclick = ()=>{
    navBox.classList.toggle('nav-show');
    navBox2.classList.toggle('nav-black');
    hamLine[0].classList.toggle('active');
    hamLine[1].classList.toggle('active');
    hamLine[2].classList.toggle('active');
}
