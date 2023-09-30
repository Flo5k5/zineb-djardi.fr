

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


////////////////////////////////////////////////////////////////
// SLIDER CAS CLIENT
////////////////////////////////////////////////////////////////


const sliderClientContainerClient = document.querySelector('.slide_container_cas_client');
const sliderClient = document.querySelectorAll('.slide_cas_client_01, .slide_cas_client_02');
const pagination = document.querySelectorAll('.number_1, .number_2');
const arrowLeft = document.querySelector('.arrow_left_small');
const arrowRight = document.querySelector('.arrow_right_small');
let currentSlideClient = 0;

const showSlideClient = (n) => {
  const transition = () => {
    sliderClient.forEach((element) => {
      element.style.transition = "all 1.5s ease";
      element.style.left = "-100%";
    });
  }

  transition();
  sliderClient.forEach((element) => {
    element.style.display = "none";
  });
  pagination[currentSlideClient].classList.remove('active');
  currentSlideClient = (n + sliderClient.length) % sliderClient.length;
  sliderClient[currentSlideClient].style.display = 'block';
  sliderClient[currentSlideClient].style.left = "0%";
  pagination[currentSlideClient].classList.add('active');
}

arrowLeft.addEventListener('click', () => {
    showSlideClient(currentSlideClient - 1);
});

arrowRight.addEventListener('click', () => {
    showSlideClient(currentSlideClient + 1);
});

for (let i = 0; i < pagination.length; i++) {
    pagination[i].addEventListener('click', () => {
      showSlideClient(i);
    });
  }

showSlideClient(0);


