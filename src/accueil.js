

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

