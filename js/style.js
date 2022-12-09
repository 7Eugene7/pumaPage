$(document).ready((function () {
    $(".header__burger").click((function (e) {
        $(".header__burger,.header__menu").toggleClass("active"),
            $("body").toggleClass("lock")
    }))
}))
$((function () {
    $(window).on("scroll", (function () {
        $(window).scrollTop() > 50 ?
            $(".header").addClass("bg") : $(".header").removeClass("bg")
    }))
}));

window.addEventListener('load', () => {
    //button
    const right = document.querySelector('.button__btn');
    //Carusel
    const slider = document.querySelector('.carusel__slide');
    const images = document.querySelectorAll('.carusel__slide img');

    //Counter
    let counter = 0;
    const stepSize = images[0].clientWidth;
    slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
    right.addEventListener('click', () => {
        counter >= images.length - 1 ? (counter = -1) : null;
        slider.classList.add('transformAnimation');
        counter++;
        slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
    });
});
let isMobile = {
    Android: function () { return navigator.userAgent.match(/Android/i); },
    BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
    iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
    Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
    Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
    any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};
let body = document.querySelector('body');
if (isMobile.any()) {
    body.classList.add('touch');
    let arrow = document.querySelectorAll('.arrow');
    for (i = 0; i < arrow.length; i++) {
        let thisLink = arrow[i].previousElementSibling;
        let subMenu = arrow[i].nextElementSibling;
        let thisArrow = arrow[i];

        thisLink.classList.add('parent');
        arrow[i].addEventListener('click', function () {
            subMenu.classList.toggle('open');
            thisArrow.classList.toggle('active');
        });
    }
} else {
    body.classList.add('mouse');
}

// Tabs for gallery
const tabs = document.querySelector(".gallery__container");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

tabs.onclick = e => {
    const id = e.target.dataset.id;
    if (id) {
        tabButton.forEach(btn => {
            btn.classList.remove("active");
        });
        e.target.classList.add("active");

        contents.forEach(content => {
            content.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
};
//slider
const sliders = document.querySelectorAll('.item-testimonials__carusel_slider'),
    sliderCarusel = document.querySelector('.item-testimonials__carusel');
let count = 0;
let width;
function init() {
    console.log('resize');
    width = document.querySelector('.item-testimonials__container').offsetWidth;
    sliderCarusel.style.width = width * sliders.length + 'px';
    sliders.forEach(item => {
        item.style.width + 'px';
        item.style.height = 'auto';
    });
    rollSlide();
    console.log(width);
}
window.addEventListener('resize', init);
init();
document.querySelector('.btn-item__btn').addEventListener('click', function () {
    count++;
    if (count >= sliders.length) {
        count = 0;
    }
    rollSlide();

});
document.querySelector('.btn-item__prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = sliders.length - 1;
    }
    rollSlide();

});
function rollSlide() {
    sliderCarusel.style.transform = 'translate(-' + count * width + 'px)';
}