let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form')
let contactInfo = document.querySelector('.contact.info')

// Alterna o menu de navegação
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active')
};

// Alterna o formulário de pesquisa
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    
};

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
};

document.querySelector('#info-btn').onclick = () =>{
    contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () =>{
    contactInfo.classList.remove('active'); 
}

// Remove a classe ativa do menu e do formulário ao rolar a página
window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    contactInfo.classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".reviews-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween:20,
    breakpoints: {
        640: {
            slidesPerView: 1, 
        }, 
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        }
    }
});


