// typeText(String,Int)
export function typeText(elementId, delay) {
    let textShifted = document.getElementById(elementId).textContent;
    document.getElementById(elementId).textContent = ".";
    let i = 0;
    for (let letter of textShifted) {
        setTimeout(function () {
            document.getElementById(elementId).textContent += letter;
        }, i * delay);
        i++;
    }
}