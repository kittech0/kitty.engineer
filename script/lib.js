// typeText(String,String,Int)
export function typeText(text, elementId, delay) {
    let textShifted = text.substr(1);
    let i = 0;
    for (let letter of textShifted) {
        setTimeout(function () {
            document.getElementById(elementId).textContent += letter;
        }, i * delay);
        i++;
    }
}