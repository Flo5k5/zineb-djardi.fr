const sliderClientContainerClient = document.querySelector('.slide_container_cas_client');
const sliderClient = document.querySelectorAll('.slide_cas_client_01, .slide_cas_client_02');
const pagination = document.querySelectorAll('.number_1, .number_2');
const arrowLeft = document.querySelector('.arrow_left_small');
const arrowRight = document.querySelector('.arrow_right_small');
let currentSlideClient = 0;

const showSlideClient = (n) => {
    sliderClient.forEach((element) => {
      element.style.display = "none";
    });
    pagination[currentSlideClient].classList.remove('active');
    currentSlideClient = (n + sliderClient.length) % sliderClient.length;
    sliderClient[currentSlideClient].style.display = 'block';
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