/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    

    /*==================== sticky navbar ====================*/

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};


/*==================== scroll reveal ====================*/
ScrollReveal({
    reset: true,
    distance: '10px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin:'right' });

/*==================== typed js ====================*/

const typed = new Typed('.multiple-text',{
    strings: ['Frontend Developer', 'Data Annotator', 'Accountant', 'Purchase Manager'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("actiive-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("actiive-tab")
}



let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 3;

loadMoreBtn.onclick =() =>{
    let boxes = [...document.querySelectorAll('.row')];
    for (var i = currentItem; i < currentItem + 3; i++){
        boxes[i].style.display = 'inline-block';
    }
    currentItem += 3;

    if(currentItem >= boxes.length){
        loadMoreBtn.style.display = 'none';
    }
}


let menuBar = document.querySelector('.menu-bar');
let menuButton = document.querySelector('#menu-icon');

menuButton.addEventListener('click', () => {
    menuBar.classList.toggle('menu-none')
})