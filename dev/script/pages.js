/* global console */
/* jshint esversion: 6 */

"use strict";

const pageElements = ["aboutme", "main", "places"];

const toggleDisplay = (id, show) => {
    const element = document.getElementById(id);
    if (element) {
        element.style.display = show ? "block" : "none";
    }
};

const showPage = (pageIdToShow) => {
    pageElements.forEach(id =>
        toggleDisplay(id, id === pageIdToShow)
    );
};

const onHashChange = () => {
    const hash = location.hash;
    const targetPageId = hash.substring(1);

    if (pageElements.includes(targetPageId)) {
        showPage(targetPageId);
    } else {
        location.hash = "";
        showPage("main");
    }
};

const registerSubSites = () => {
    onHashChange();
    window.addEventListener("hashchange", onHashChange);
};

registerSubSites();