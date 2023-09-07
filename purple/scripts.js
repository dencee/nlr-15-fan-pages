const studentFanPageUrls = new Map();

studentFanPageUrls.set('Brett Williams', "https://brwilliams1.github.io/fan-page/");



window.addEventListener('DOMContentLoaded', event => {

    const mainEl = document.querySelector('main.fan-page-cards');
    const template = document.getElementById('card-template');

    for(const [name, url] of studentFanPageUrls){
        const clone = document.importNode(template.content, true);
        clone.querySelector('.card-header').innerText = name;
        clone.querySelector('iframe').src = url;
        clone.querySelector('.fan-site-button').addEventListener('click', openSiteInTab);
        mainEl.appendChild(clone);
    }
});

function openSiteInTab(event){
    const iframeSite = event.target.previousElementSibling;
    const url = iframeSite.getAttribute('src');
    const w = window.open(url, "_blank");
}
