// nav for mobile codes
var sidemenu = document.getElementById('sidemenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav #sidemenu li a');

closeMenu.addEventListener('click', closemenu);
openMenu.addEventListener('click', openmenu);

menu_items.forEach(item => {
    item.addEventListener('click',function(){
        closemenu();
    })
})

function openmenu(){
    sidemenu.style.right = '0';
}

function closemenu(){
    sidemenu.style.right = '-255px';
}

// Background Slideshow code
let slideImg = document.getElementById('slide-img');

let images = new Array(
    'images/-5781578648673955559_120.jpg',
    'images/-5894474187626622818_120.jpg',
    'images/-6040691122243743453_120.jpg',
);

let len = images.length;
let i = 0;

function slider(){
    if (i > len-1){
        i = 0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()', 3000);
}

// faq/accordion codes
let answers=document.querySelectorAll(".accordion");
answers.forEach((event)=>{
    event.addEventListener('click',()=>{
        if(event.classList.contains("active")){
            event.classList.remove("active");
        }
        else{
            event.classList.add("active");
        }
    })
})

// Get the modal
var modal = document.getElementById('form-wrapper');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
let formItem = document.getElementById('form-wrapper');
let openTheForm = document.querySelector('.btn-login');
let close = document.querySelector('.close');
let closeAgain = document.querySelector('.submit');
let closeOnceMore = document.querySelector('.cancelbtn');

openTheForm.addEventListener('click', openForm);
close.addEventListener('click', closeForm);
closeAgain.addEventListener('click', closeForm);
closeOnceMore.addEventListener('click', closeForm);

function closeForm(){
    formItem.style.display = 'none';
}

function openForm() {
    formItem.style.display = 'block';
}

// Scroll Animation Codes
const scrollElements = document.querySelectorAll('.js-scroll');

const elementInView = (el, dividend = 1) =>{
    const elementTop = el.getBoundingClientRect().top;
    return(elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
};

const elementOutofView = (el) =>{
    const elementTop = el.getBoundingClientRect().top;
    return(elementTop > (window.innerHeight || document.documentElement.clientHeight) / dividend);
};

const displayScrollElement = (element) => {
    element.classList.add('scolled')
};

const hideScrollElement = (element) => {
    element.classList.remove('scolled')
};

const handleScrollAnimation = () =>{
    scrollElements.forEach((el)=>{
        if (elementInView(el, 1.25)){
            displayScrollElement(el)
        }else if (elementOutofView(el)){
            hideScrollElement(el)
        }
    })
};

window.addEventListener('scroll', () =>{
    handleScrollAnimation()
})
