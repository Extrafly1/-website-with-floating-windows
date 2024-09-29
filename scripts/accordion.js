const buttons = document.querySelectorAll('button[data-target], h1[data-target]');
buttons.forEach(element => {
    element.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const section = document.getElementById(targetId);

        if (section.classList.contains('visible')) {
            section.style.display = 'none';
        } else {
            section.style.display = 'block';
        }

        section.classList.toggle('visible');
    });
});