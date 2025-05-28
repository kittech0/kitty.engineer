/* jshint esversion: 11 */
"use strict";

const $id = (id) => document.getElementById(id);
const pagesDir = "/_pages";

const pages = [
    {hash: "", url: `${pagesDir}/main.html`, cache: "",},
    {hash: "#aboutme", url: `${pagesDir}/aboutme.html`, cache: "",},
    {hash: "#books", url: `${pagesDir}/books.html`, cache: "",},
    {hash: "#distributism", url: `${pagesDir}/distributism.html`, cache: "",},
    {hash: "#places", url: `${pagesDir}/places.html`, cache: "",},
    {hash: "#projects", url: `${pagesDir}/projects.html`, cache: "",},
];

const getPositionOrDefault = () =>
    pages.findLast(({hash}) => hash === location.hash) || pages[0];


const changePages = async (e) => {
    if (!e) {
        return;
    }
    const page = getPositionOrDefault();
    if (page.cache === "") {
        page.cache = await (await fetch(page.url)).text();
    }
    $id("content").innerHTML = page.cache;
};

window.onhashchange = changePages;
window.onload = changePages;

changePages().then();
