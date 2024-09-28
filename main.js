function typeText(text, elementId, delay) {
    for (let i = 0; i < text.length; i++) {
        setTimeout(function () {
            document.getElementById(elementId).textContent += text.charAt(i);
        }, i * delay); // Delay increases with each iteration
    }
}
window.onload = function () {
    typeText('Welcome to my website!', 'header', 100); 
};