

<script>
  const slider = document.querySelector("#slider");
  const sliderText = document.querySelector("#slider-text");
  const sliderImage = document.querySelector("#slider-image");
  const nav = document.querySelector("#nav");
  const navBtns = document.querySelectorAll(".nav-btn");

  const slides = [
    {
      text: "Slide 1 text",
      image: "https://picsum.photos/200/300",
      title: "Slide 1 title"
    },
    {
      text: "Slide 2 text",
      image: "https://picsum.photos/200/300",
      title: "Slide 2 title"
    },
    {
      text: "Slide 3 text",
      image: "https://picsum.photos/200/300",
      title: "Slide 3 title"
    },
    {
      text: "Slide 4 text",
      image: "https://picsum.photos/200/300",
      title: "Slide 4 title"
    }
  ];

  let currentSlide = 0;

  function displaySlide() {
    sliderText.innerHTML = slides[currentSlide].text;
    sliderImage.src = slides[currentSlide].image;
    navBtns.forEach(btn => btn.classList.remove("active"));
    navBtns[currentSlide].classList.add("active");
  }

  navBtns.forEach(btn => {
    btn.addEventListener("click", e => {
      currentSlide = parseInt(e.target.dataset.slide);
      displaySlide();
    });
  });

  displaySlide();
</script>
