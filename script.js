let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
     let top = window.scrollY;
     let offset = sec.offsetTop - 150;
     let height = sec.offsetHeight;
     let id = sec.getAttribute('id');
 
     if(top >= offset && top < offset + height){
         navLinks.forEach(links => {
             links.classList.remove('active');
             document.querySelector('header nav a[href*=' + id +']').classList.add('active');
         });
     };
    }) ;
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scroll > 100);

// remove toggle icon and navbar when click navbar link (scroll)
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};

let hide = document.getElementById('contact');
let contactBtn = document.getElementById('contactBtn');
let display = 0;

function hideShow() {
    if(display == 1){
        hide.style.display= 'block';
        display = 0;
    }
    else{
        hide.style.display = 'none';
        display=1;
    }
}


let valueDisplays = document.querySelectorAll(".num");
let interval = 3000;

valueDisplays.forEach((valueDisplay)  => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("dat-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
        startValue += 1;
        valueDisplay.textContent = startValue;
        if(startValue == endValue){
            clearInterval(counter);
        }
    }, duration)
})
