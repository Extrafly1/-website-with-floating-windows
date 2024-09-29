const image = document.querySelector('.image');
const text = document.querySelector('.text');

image.addEventListener('mouseenter', function() {
    fadeImageOut(image);
    text.style.opacity = 1;
});

image.addEventListener('mouseleave', function() {
    fadeImageIn(image);
    text.style.opacity = 0;
});

function fadeImageIn(element) {
    let opacity = 0;
    const interval = setInterval(function() {
        if (opacity < 1) {
            opacity += 0.1;
            element.style.opacity = opacity;
        } else {
            clearInterval(interval);
        }
    }, 50);
}

function fadeImageOut(element) {
    let opacity = 1;
    const interval = setInterval(function() {
        if (opacity > 0) {
            opacity -= 0.1;
            element.style.opacity = opacity;
        } else {
            clearInterval(interval);
        }
    }, 50);
}