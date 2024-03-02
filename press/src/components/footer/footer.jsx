import React from "react";
import './footer.css';

function Footer() {
    return (
        <>
            <footer>
                <img className="footer__logo" src="https://cdn.jsdelivr.net/gh/IKEENOO/dals.by/press/src/assets/dals_logo.png" alt="logo"/>
                <a href="mailto:contact.dals.by@gmail.com">contact.dals.by@gmail.com</a>
                <a href="tel:80447117633">+375 (44) 711-76-33</a>
                <a href="https://yandex.by/maps/-/C2BfZca">Вейнянский сельсовет, 53</a>
                <p class="year">© ООО "СКБ ДалС", 2014 - 2024</p>
            </footer>
        </>
    );
}

export default Footer;