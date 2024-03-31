import React from 'react';
import "./navbar.css";

function Navbar() {
	return (
		<>
			<nav className="navbar">
				<input id="nav-toggle" type="checkbox"/>
				<div className="logo">
					<div className="dals__block">
						<img className="dals__logo" src="https://cdn.jsdelivr.net/gh/IKEENOO/dals.by/press/src/assets/dals_logo.png" alt="logo"/>
					</div>
				</div>
				<ul className="links">
					<li><a href="/">Главная</a></li>
					<li><a href="/#about">О нас</a></li>
					<li><a href="/#molds">Формы</a></li>
					<li><a href="/#contact">Контакты</a></li>
				</ul>
				<label for="nav-toggle" className="icon-burger">
					<div className="line"></div>
					<div className="line"></div>
					<div className="line"></div>
				</label>
			</nav>
		</>
	);
}

export default Navbar;