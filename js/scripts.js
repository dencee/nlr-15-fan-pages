const studentFanPageUrls = new Map();

studentFanPageUrls.set('Brett Williams', "https://brwilliams1.github.io/fan-page/");
studentFanPageUrls.set('John Joyce', "https://webcr8tor.github.io/fan-page/");
studentFanPageUrls.set('Emily Sanders', "https://emilyesanders.github.io/fan-page/");
studentFanPageUrls.set('Dj Litts', "https://littsdj.github.io/fan-page/");
studentFanPageUrls.set('Jose Reveles', "https://jrev66.github.io/fan-page/");
studentFanPageUrls.set('Connor Finnegan', "https://finneg23.github.io/fan-page/");
studentFanPageUrls.set('Maryam Mian', "https://mianms.github.io/fan-page/");
studentFanPageUrls.set('Jay Smith', "https://jaysmith413.github.io/fan-page/");
studentFanPageUrls.set('Brock Lavergne', "https://brocklavergne.github.io/simple-aggie-site/");
studentFanPageUrls.set('Jessie Le', "https://jessietle.github.io/fan-page/");
studentFanPageUrls.set('Jessie Le', "https://alejandrolopeztrs.github.io/famous-frenchies-page/");

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
