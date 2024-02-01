import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './main.css'

AOS.init();

export class Main extends Component {
    render() {
        return (
            <>
                <nav data-aos="zoom-in" className="header">
                    <a href="#main">
                        <img className="logo" src="https://cdn.jsdelivr.net/gh/IKEENOO/dals.by/excavators/src/assets/dals_logo.png" alt="Logo"/>
                    </a>
                </nav>

                <div className="main" id="main">
                    <h1 data-aos="zoom-in" className="text">Восстановление и ремонт ковшей и стрел экскаваторов</h1>
                </div>

                <div className="about">
                    <h2 data-aos="zoom-in" className="subtitle">
                        Чем мы занимаемся?
                    </h2>
                    <p data-aos="zoom-in" className="discription__text">
                        СКБ ДалС специализируется на восстановлении и ремонте ковшей экскаваторов. Компания предоставляет услуги по ремонту и модернизации ковшей для различных типов экскаваторов.
                    </p>
                </div>

                <div data-aos="zoom-in" className="pic" ></div>

                <h2 data-aos="zoom-in" className="subtitle">
                    Почему мы?
                </h2>
                <div className="advantages">
                    <div data-aos="zoom-in" className="advantage">
                        <img className="adv__img" src="https://cdn.jsdelivr.net/gh/IKEENOO/dals.by/excavators/src/assets/experience.png" alt="#"/>
                        <p className="adv__text">
                            Мы имеем значительный опыт в области восстановления и ремонта ковшей экскаваторов
                        </p>
                    </div>
                    <div data-aos="zoom-in" className="advantage">
                        <img className="adv__img" src="https://cdn.jsdelivr.net/gh/IKEENOO/dals.by/excavators/src/assets/tools.png" alt="#"/>
                        <p className="adv__text">
                            Мы используем современное оборудование и технологии, обеспечивая высокое качество работы
                        </p>
                    </div>
                    <div data-aos="zoom-in" className="advantage">
                        <img className="adv__img" src="https://cdn.jsdelivr.net/gh/IKEENOO/dals.by/excavators/src/assets/metal.png" alt="#"/>
                        <p className="adv__text">
                            Мы используем только высококачественные материалы и запчасти при ремонте ковшей экскаваторов
                        </p>
                    </div>
                </div>

                <div className="works">
                    <h2 data-aos="zoom-in" className="subtitle">
                        Наши работы
                    </h2>

                    <p data-aos="zoom-in" className="discription__text">
                        Благодаря многолетней работе в этой сфере, наши специалисты имеют высокую квалификацию и знания в области проектирования и технического обслуживания ковшей. Большой опыт позволяет нам быстро и качественно решать любые задачи, связанные с восстановлением и ремонтом ковшей экскаваторов.
                    </p>
                </div>

                <div data-aos="zoom-in" className="works__wrapper">
                    <div className="wrapper">
                        <i id="left" className="fa-solid fa-angle-left"></i>
                        <div className="carousel">
                            <img src="https://cdn.jsdelivr.net/gh/IKEENOO/dals.by/excavators/src/assets/1.jpg" alt="#" draggable="false"/>
                            <img src="https://cdn.jsdelivr.net/gh/IKEENOO/dals.by/excavators/src/assets/2.jpg" alt="#" draggable="false"/>
                            <img src="https://cdn.jsdelivr.net/gh/IKEENOO/dals.by/excavators/src/assets/3.jpg" alt="#" draggable="false"/>
                            <img src="https://cdn.jsdelivr.net/gh/IKEENOO/dals.by/excavators/src/assets/4.jpg" alt="#" draggable="false"/>
                            <img src="https://cdn.jsdelivr.net/gh/IKEENOO/dals.by/excavators/src/assets/5.jpg" alt="#" draggable="false"/>
                            <img src="https://cdn.jsdelivr.net/gh/IKEENOO/dals.by/excavators/src/assets/6.jpg" alt="#" draggable="false"/>
                        </div>
                        <i id="right" className="fa-solid fa-angle-right"></i>
                    </div>
                </div>
                
                <h2 data-aos="zoom-in" className="subtitle">
                    Контакты
                </h2>
                <div className="contacts">
                    <div data-aos="zoom-in" className="block">
                        <img src="https://cdn.jsdelivr.net/gh/IKEENOO/dals.by/excavators/src/assets/phone.png" alt="#"/>
                        <a href="tel:80447117633">+375 (44) 711-76-33</a>
                    </div>
                    <div data-aos="zoom-in" className="block">
                        <img src="https://cdn.jsdelivr.net/gh/IKEENOO/dals.by/excavators/src/assets/location.png" alt="#"/>
                        <a target="_blank" href="https://yandex.by/maps/-/CCUHy2XW1C">Могилёвский район, Вейнянский сельсовет, 53</a>
                    </div>
                    <div data-aos="zoom-in" className="block">
                        <img src="https://cdn.jsdelivr.net/gh/IKEENOO/dals.by/excavators/src/assets/email.png" alt="#"/>
                        <a href="mailto:contact.dals.by@gmail.com">contact.dals.by@gmail.com</a>
                    </div>
                </div>

                <div className="footer">
                    <a href="https://dals.by" target="_blank">
                        <img className="footer__logo" src="https://cdn.jsdelivr.net/gh/IKEENOO/dals.by/excavators/src/assets/dals_logo.png" alt="Логотип"/>
                    </a>
                    <p >ООО "СКБ ДалС" &copy; 2014 - <span id="current__year"></span>. Все права защищены.</p>
                    <script src="./js/current_year.js"></script>
                </div>

                <script src="./js/scroll.js"></script>
            </>
        );
    }
}