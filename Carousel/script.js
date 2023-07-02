let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-item");
const slideCount = slides.length;

const imgCache = [];

async function preloadImage() {
  for (let i = 0; i < slideCount; i++) {
    await fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        // const img = document.createElement("img");
        const img = new Image();
        img.src = data.message;
        imgCache.push(img);
      });
  }
}

function showSlide(n) {
  slides[currentSlide].classList.remove("active");

  const img = slides[currentSlide].querySelector("img");
  if (img) {
    img.remove();
  }

  currentSlide = (n + slideCount) % slideCount;
  slides[currentSlide].classList.add("active");

  const cacheImg = imgCache[currentSlide];
  slides[currentSlide].appendChild(cacheImg)
}

document.getElementById("prev").addEventListener("click", () => {
  showSlide(currentSlide - 1);
});

document.getElementById("next").addEventListener("click", () => {
  showSlide(currentSlide + 1);
});

preloadImage().then(()=>{
    console.log("000")
    showSlide(0);
})

