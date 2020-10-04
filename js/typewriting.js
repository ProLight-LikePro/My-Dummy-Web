const texts = ["I AM ANJERYAN"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing').textContent = letter;

    if (letter.length === currentText.length) {
        index = 0;
    }

    setTimeout(type, 400);
}());