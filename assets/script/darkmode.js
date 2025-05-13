const toggleButton = document.getElementById('mode-toggle');
const body = document.body;

const getTheme = _ => localStorage.getItem("theme");
const setTheme = mode => {
    if (mode === "dark") {
        body.classList.add('dark-mode');
        toggleButton.textContent = '🌙';
    } else {
        body.classList.remove('dark-mode');
        toggleButton.textContent = '☀️';
        mode = "light";
    }
    localStorage.setItem('theme', mode);
}


const savedTheme = getTheme();
savedTheme !== null ? setTheme(savedTheme) : setTheme("light");

toggleButton.addEventListener('click', _ =>
    setTheme(getTheme() === "dark" ? "light" : "dark")
);