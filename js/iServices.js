import services from './services.json';
const swiperContainer = document.getElementById('#services__cards');

let slideIndex = 0;
let slideTemplate = `
<li data-aos="zoom-in" class="scard">
<div class="cimage" style="background-image: url(assets/cards/%image%.jpg);">
    <h4 class="service__name">%name%</h4>
</div>
</li>`;

function showSlides() {
    services.forEach(element => {
        let slideHTML = slideTemplate
                .replace('%image%', services[slideIndex]['image'])
                .replace('%name%', services[slideIndex]['name']);
        swiperContainer.innerHTML = slideHTML;
        slideIndex++;
    });
}

showSlides();