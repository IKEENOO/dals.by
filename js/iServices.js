import services from './services.js';
console.log(services);
const swiperContainer = document.getElementById('services__cards');

let slideIndex = 0;

showSlides();
function showSlides() {
    let slideNumber = 1;
    services.forEach(element => {
        let slideTemplate = `
<li data-aos="zoom-in" class="service__card">
<div class="card__image" style="background-image: url(assets/cards/%image%.jpg);">
    <h4 class="service__name">%name%</h4>
</div>
</li>`;
        let slideHTML = slideTemplate
                .replace('%image%', services[slideIndex]['image'])
                .replace('%name%', services[slideIndex]['name']);
        swiperContainer.innerHTML = slideHTML;
        slideIndex++;
        slideNumber++;
    });
}