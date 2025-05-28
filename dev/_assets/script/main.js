/* global console */
/* jshint esversion: 11 */

"use strict";

const
    THEME_KEY = "theme",
    toggleButton = document.getElementById("mode-toggle"),
    body = document.body;

const setTheme = isDark => {
    if (isDark) {
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    }
    toggleButton.textContent = isDark ? '🌙' : '☀️';
};

const setStoredItem = (key, value) => {
    try {
        localStorage.setItem(key, String(value));
        return value;
    } catch (e) {
        console.error("localStorage set error:", e);
        return false;
    }
};

const getStoredItem = key => {
    try {
        return localStorage.getItem(key) === "true";
    } catch (e) {
        console.error("localStorage get error:", e);
        return false;
    }
};


const onClick = () => {
    const value = !getStoredItem(THEME_KEY);
    setStoredItem(THEME_KEY, value);
    setTheme(value);
};


const registerDarkMode = () => {
    setTheme(getStoredItem(THEME_KEY));

    toggleButton.addEventListener("click", onClick);
};


registerDarkMode();


