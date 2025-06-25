"use strict";

type FileLanguage = Record<string, string>;
type LanguageTypes = "pl" | "en";

const KEY = "lang";
const [btn, selector, list] = ["lang-btn", "lang-selector", "lang-list"].map(id => document.getElementById(id)!);
const elements = document.querySelectorAll<HTMLElement>("[data-translation]");

const FLAGS: Record<LanguageTypes, string> = { pl: "🇵🇱", en: "🇬🇧" };

const loadLanguage = (lang: LanguageTypes) =>
    fetch(`/lang/${lang}.json`).then(res => res.json() as Promise<FileLanguage>);

const updateLanguage = async (lang: LanguageTypes) => {
    const file = await loadLanguage(lang);
    elements.forEach(el => {
        const key = el.dataset.translation!;
        el.textContent = file[key] ?? `%${key}%`;
    });
    localStorage.setItem(KEY, lang);
    btn.textContent = FLAGS[lang];
};

btn.onclick = () => selector.classList.toggle("open");

list.onclick = async ({ target }) => {
    const item = (target as HTMLElement).closest<HTMLElement>("[data-lang]");
    if (item) {
        await updateLanguage(item.dataset.lang as LanguageTypes);
        selector.classList.remove("open");
    }
};

await updateLanguage((localStorage.getItem(KEY) as LanguageTypes) || "en");

export { };
