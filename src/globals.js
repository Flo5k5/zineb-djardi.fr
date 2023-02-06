////////////////////////////////////////////////////////////////
//
//  GLOBALS
//
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
//
//  RESPONSIVE BREAKPOINTS (BASED ON BOOTSTRAP)
//
////////////////////////////////////////////////////////////////

global.RSP_XXS = 320;
global.RSP_XS = 375;
global.RSP_SM = 768;
global.RSP_MD = 992;
global.RSP_LG = 1200;
global.RSP_XL = 1400;
global.RSP_XXL = 1600;


////////////////////////////////////////////////////////////////
// SLIDER METHODE
////////////////////////////////////////////////////////////////

const slideContainer = document.querySelector(".slide_container");
const slides = document.querySelectorAll(".slide");
const menuItems = document.querySelectorAll(".menu li");

let currentSlide = 0;
slides.forEach((slide, index) => {
if (index === currentSlide) {
slide.style.display = "flex";
} else {
slide.style.display = "none";
}
});
menuItems[currentSlide].classList.add("active");

const prevSlide = () => {
slides[currentSlide].style.display = "none";
menuItems[currentSlide].classList.remove("active");
currentSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
slides[currentSlide].style.display = "flex";
menuItems[currentSlide].classList.add("active");
};

const nextSlide = () => {
slides[currentSlide].style.display = "none";
menuItems[currentSlide].classList.remove("active");
currentSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
slides[currentSlide].style.display = "flex";
menuItems[currentSlide].classList.add("active");
};

menuItems.forEach((item, index) => {
item.addEventListener("click", () => {
slides[currentSlide].style.display = "none";
menuItems[currentSlide].classList.remove("active");
currentSlide = index;
slides[currentSlide].style.display = "flex";
menuItems[currentSlide].classList.add("active");
});
});












  

