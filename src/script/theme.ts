"use strict";
const THEME_KEY = "theme";
const toggleButton = document.getElementById("mode-toggle")!;
const root = document.querySelector(':root')!;

const isDark = (): boolean => {
    try {
        return JSON.parse(localStorage.getItem(THEME_KEY) ?? "false");
    } catch {
        return false;
    }
};

const setTheme = (dark: boolean): void => {
    root.classList.toggle("dark", dark);
    toggleButton.textContent = dark ? "🌙" : "☀️";
    localStorage.setItem(THEME_KEY, JSON.stringify(dark));
};

toggleButton.onclick = () => setTheme(!isDark());
setTheme(isDark());