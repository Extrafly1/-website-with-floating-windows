let intervalId;

document.addEventListener("DOMContentLoaded", function() {
    if (intervalId) {
        clearInterval(intervalId);
        const blocks = document.querySelectorAll('.image-container img');
        blocks.forEach(block => {
            block.style.display = 'grid';
        });
    } else {
        document.querySelector('.image-container').style.display = 'grid';
        intervalId = setInterval(removeRandomBlock, 120);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const blocks = document.querySelectorAll('.image-container img');
    const randomIndex = Math.floor(Math.random() * blocks.length);
    const randomBlock = blocks[randomIndex];
    randomBlock.remove();
    if (blocks.length === 0) {
        clearInterval(intervalId);
        intervalId = null;
    }

});