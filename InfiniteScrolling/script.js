const imgContainer = document.getElementById("image-container");

async function loadImages(numImages = 10) {
  for (let i = 0; i < numImages; i++) {
    try {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await res.json();
      const img = document.createElement("img");
      img.src = data.message;
      imgContainer.appendChild(img);
    } catch (error) {
      console.log("Error---", error);
    }
  }
}

loadImages();

window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    loadImages();
  }
});
