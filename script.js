


var car = gsap.to(".car_own_cont", {
    x: "-99.5vw",
    duration: "12",
    repeat: -1,
    ease: "linear"

})

var carown = document.querySelector(".car_own_cont");
carown.addEventListener("mouseenter", () => {
    car.pause();
})
carown.addEventListener("mouseleave", () => { 
    car.play();
})


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});