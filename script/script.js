// Array of background images
const images = [
  "./img/doc.jpg", // replace with your first image
  "./img/slide_2.jpg", // replace with your second image
];

let currentIndex = 0;
const showcase = document.querySelector(".showcase");

function changeBackground() {
  currentIndex = (currentIndex + 1) % images.length;
  showcase.style.backgroundImage = `url(${images[currentIndex]})`;
}

// Set initial background
showcase.style.backgroundImage = `url(${images[currentIndex]})`;

// Change background every 5 seconds
setInterval(changeBackground, 5000);
