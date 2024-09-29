const imageContainer = document.querySelector('.image-container-2');
const images = Array.from(imageContainer.querySelectorAll('img'));
let currentIndex = 0;

function displayNextImage() {
    images.forEach(image => {
        image.style.display = 'none';
    });
    images[currentIndex].style.display = 'block';
    currentIndex = (currentIndex + 1) % images.length;
}
imageContainer.addEventListener('click', displayNextImage);
imageContainer.addEventListener('mouseout', function(event) {
    if (!imageContainer.contains(event.relatedTarget)) {
        displayNextImage();
    }
});