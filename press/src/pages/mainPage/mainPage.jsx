import React from 'react';
import './mainPage.css';

function MainPage() {
    return (
        <>
            <section className="main_sec">
                <h1>Ключ к безупречным изделиям - наши пресс-формы</h1>
            </section>

            <section className="description" id="about">
                <p>Одно из направлений нашей деятельности - проектирование и изготовление пресс-форм для вибропрессов полусухого прессования. Нами освоен весь спектр пресс-форм для прессов отечественного и импортного производства. Также мы изготавливаем оснастку для прессов всех видов прессования и всех модификаций типа</p>
            </section>
            
            <section id="molds">
                <h2>Наши пресс-формы</h2>
                <div className="molds">
                    <img src="https://cdn.jsdelivr.net/gh/IKEENOO/dals.by/press/src/assets/mold_one.jpg" alt="Пресс-форма"/>
                    <img src="https://cdn.jsdelivr.net/gh/IKEENOO/dals.by/press/src/assets/mold_two.jpg" alt="Пресс-форма"/>
                    <img src="https://cdn.jsdelivr.net/gh/IKEENOO/dals.by/press/src/assets/mold_three.jpg" alt="Пресс-форма"/>
                </div>
            </section>

            <section>
                <p>Мы производим пресс-формы для вибропрессов, которые используются при выпуске широкого спектра бетонных изделий:</p>
                <ul>
                    <li>Тротуарная плитка любой модификации</li>
                    <li>Бордюрные камни всех типоразмеров</li>
                    <li>Стеновые, фундаментные камни любой модификации (пустотелые, колотые, рустованные…)</li>
                    <li>Различные изделия по чертежам заказчика</li>
                </ul>
            </section>
        </>
    );
}

export default MainPage;