window.onload = function () {
    if(document.documentElement.clientWidth < 401) {
        let spanFromHeader = document.querySelector('header span');
        spanFromHeader.innerHTML = `${"An award-winning construction <br/> management firm"}`
    }
}

// if(document.documentElement.clientWidth < 769) {
//     let tempMenu = document.querySelector('#main');
//     tempMenu.removeAttribute('id');
//     let neededTag = document.querySelector('.story .container');

//     id = document.createAttribute('id');
//     id.value = "main";
//     neededTag.setAttributeNode(id);
// }   

//burger-menu 
const iconMenu = document.querySelector('.navBurger');
const menuBody = document.querySelector('.menu__body');
if(iconMenu) {
    iconMenu.addEventListener('click', function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active')
    })
}

//animate on scroll
AOS.init({
    disable: 'phone',
    disable: 'tablet',
    disable: 'mobile'
});

//btn-top function 
let btnTop = document.getElementById('button-top');
window.addEventListener('scroll', function () {
    let pageScroll = window.pageYOffset;
	if (pageScroll > 300) {
        btnTop.style.visibility = "visible";
        btnTop.style.opacity = '1';
	} else {
        btnTop.style.visibility = "hidden";
        btnTop.style.opacity = '0';
	}
})

btnTop.addEventListener("click", function () {
    let top = 0;
	window.scrollTo({
        top,
        behavior: 'smooth'
    });
})

//scroll
document.querySelectorAll('header a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();
        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);
        const topOffset = 0
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});
document.querySelectorAll('main a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();
        //close burger-menu when press on link
        if(iconMenu.classList.contains('_active')) {
            document.body.classList.remove('_lock');
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active')
        }

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);
        // const topOffset = 0; 
        const topOffset = document.querySelector('.menu__body').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});


const widthDevice = document.querySelector('#header').clientWidth

if(widthDevice < 481) {
    const swiperContainer = document.querySelector('.story__content'),
          swiperWrapper = document.querySelector('.story__images');
    
    const swiperSlides = document.querySelectorAll('.story__images-img');

    swiperContainer.classList.add('swiper-container');
    swiperWrapper.classList.add('swiper-wrapper');

    for(let i = 0; i < swiperSlides.length; i += 1) {
        swiperSlides[i].classList.add('swiper-slide')
    }

    let sliderAutoRotation = document.querySelector('.swiper-wrapper');

    sliderAutoRotation.addEventListener('mouseenter', function (e) {
        sliderSwiper.params.autoplay.disableOnIteraction = false;
        sliderSwiper.params.autoplay.delay = 2000;
        sliderSwiper.autoplay.start();
    });
    sliderAutoRotation.addEventListener('mouseleave', function(e) {
        sliderSwiper.autoplay.stop();
    });
}

let sliderSwiper = new Swiper('.swiper-container',{
    direction: 'horizontal',
    breakpoints: {
        320: {
          slidesPerView: 'auto',
          spaceBetween: 8
        },
        330: {
            slidesPerView: 'auto',
            spaceBetween: 13
        },
        340: {
            slidesPerView: 'auto',
            spaceBetween: 18
        },
        360: {
            slidesPerView: 'auto',
            spaceBetween: 35
        },
        380: {
            slidesPerView: 'auto',
            spaceBetween: 40
        },
        400: {
            slidesPerView: 'auto',
            spaceBetween: 40
        },
        420: {
            slidesPerView: 'auto',
            spaceBetween: 40
        },
        440: {
            slidesPerView: 'auto',
            spaceBetween: 50
        },
        460: {
            slidesPerView: 'auto',
            spaceBetween: 60
        },
        480: {
        slidesPerView: 'auto',
          spaceBetween: 70
        }
    },
    centeredSlides: true,
    initialSlide: 0,
    autoplay: {
        delay: 3000,
        disableOnIteraction: true
    }
});


