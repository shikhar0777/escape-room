// Simple click interaction
const images = document.querySelectorAll(".gallery img");

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    alert(`You clicked Escape Room Image ${index + 1}`);
  });
});
