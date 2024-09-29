function typeText(text, elementId, delay) {
    let i = 0;
    for (let letter of text) {
        setTimeout(function () {
            document.getElementById(elementId).textContent += letter;
        }, i * delay);
        i++;
    }
}

window.onload = () => {
    typeText('Hello there 👋', 'title', 100);
};