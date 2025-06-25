"use strict";

type LangCode = "pl" | "en";
type LangFile = Record<string, string>;

const KEY = "lang";
const FLAGS: Record<LangCode, string> = { pl: "🇵🇱", en: "🇬🇧" };
const $ = (id: string) => document.getElementById(id)!;

const btn = $("lang-btn");
const selector = $("lang-selector");
const list = $("lang-list");
const elements = document.querySelectorAll<HTMLElement>("[data-translation]");

const updateLanguage = async (lang: LangCode) => {
    const res = await fetch(`/lang/${lang}.json`);
    const file: LangFile = await res.json();
    for (const el of elements) {
        const key = el.dataset.translation!;
        el.textContent = file[key] ?? `%${key}%`;
    }
    btn.textContent = FLAGS[lang];
    localStorage.setItem(KEY, lang);
};

btn.onclick = () => selector.classList.toggle("open");

list.onclick = async e => {
    const lang = (e.target as HTMLElement).closest<HTMLElement>("[data-lang]")?.dataset.lang as LangCode;
    if (lang) {
        await updateLanguage(lang);
        selector.classList.remove("open");
    }
};

await updateLanguage((localStorage.getItem(KEY) as LangCode) || "en");

export { };
