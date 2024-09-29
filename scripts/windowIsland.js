const draggableWindows = document.querySelectorAll('[id=tagle]');
draggableWindows.forEach(draggableWindow => {
    const sectionToMove = document.getElementById(draggableWindow.getAttribute('data-target'));

    let isDragging = false;
    let offsetX, offsetY;

    draggableWindow.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - sectionToMove.getBoundingClientRect().left;
        offsetY = e.clientY - sectionToMove.getBoundingClientRect().top;
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            sectionToMove.style.transform = `translate(${e.clientX - offsetX}px, ${e.clientY - offsetY}px)`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
});

document.querySelectorAll('section.hiden').forEach(section => {
    section.addEventListener('mousedown', function() {
        document.querySelectorAll('section.hiden').forEach(sec => {
            sec.style.zIndex = "1";
        });
        this.style.zIndex = "100";
    });
});