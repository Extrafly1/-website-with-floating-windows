const parentElement = document.body;
const childNodes = parentElement.childNodes;

document.getElementById('dom-input').addEventListener('input', function() {
    const elementNumber = parseInt(this.value); // Используем this.value для получения значения из ввода

    if (elementNumber >= 0 && elementNumber < childNodes.length) { // Проверяем, что индекс находится в допустимом диапазоне
        const targetElement = childNodes[elementNumber];

        if (targetElement.nodeType === 1) { // Проверяем, является ли targetElement элементом
            const nestedElements = targetElement.querySelectorAll('*');
            const nestedElementCount = nestedElements.length - 1;
            document.getElementById('dom-h2').textContent = nestedElementCount;
            console.log('Выбранный элемент:', targetElement);
        } else {
            document.getElementById('dom-h2').textContent = 'Блок не найден или не является элементом';
        }
    } else {
        document.getElementById('dom-h2').textContent = 'Неверный индекс элемента';
    }
});