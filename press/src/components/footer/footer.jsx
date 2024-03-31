import React from "react";
import './footer.css';

function Footer() {
    return (
        <>
            <footer  className="footer">
                <div className="footer__blocks">
                    <div id="footer__contacts">
                        <img className="dals__logo" src="https://cdn.jsdelivr.net/gh/IKEENOO/dals.by/press/src/assets/dals_logo.png" alt="logo"/>

                        <a target="_blank" href="https://yandex.by/maps/-/C2BfZca">Могилёвский район, Вейнянский сельсовет, 53</a>

                        <a href="tel:80447117633">+375 (44) 711-76-33</a>

                        <a href="mailto:contact.dals.by@gmail.com">contact.dals.by@gmail.com</a>
                    </div>
                    <div id="footer__second">
                        <a href="/">
                            <p>Главная</p>
                        </a>

                        <a href="/#about">
                            <p>О нас</p>
                        </a>

                        <a href="/#molds">
                            <p>Формы</p>
                        </a>

                        <a href="/#contact">
                            <p>Контакты</p>
                        </a>
                    </div>
                </div>
                <div className="copyright">
                    <p>ООО "СКБ ДалС", 2014 - 2024</p>   
                </div>
            </footer>
        </>
    );
}

export default Footer;