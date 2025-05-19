const toggleButton = document.getElementById('mode-toggle');
const body = document.body;

const THEME_DARK = 'dark',
    THEME_LIGHT = 'light',
    THEME_KEY = 'theme';

const getStoredTheme = () => {
    try {
        return localStorage.getItem(THEME_KEY);
    } catch (e) {
        console.error("localStorage get error:", e);
        return null;
    }
};

const applyTheme = mode => {
    const isDark = mode === THEME_DARK;
    body.classList.toggle(`${THEME_DARK}-mode`, isDark);
    toggleButton.textContent = isDark ? '🌙' : '☀️';
    try {
        localStorage.setItem(THEME_KEY, isDark ? THEME_DARK : THEME_LIGHT);
    } catch (e) {
        console.error("localStorage set error:", e);
    }
};

applyTheme(getStoredTheme() ?? (window.matchMedia?.('(prefers-color-scheme: dark)').matches ? THEME_DARK : THEME_LIGHT));

toggleButton.addEventListener('click', () =>
    applyTheme(getStoredTheme() === THEME_DARK ? THEME_LIGHT : THEME_DARK)
);
