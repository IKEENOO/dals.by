import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<img className="nav_img" src="https://cdn.jsdelivr.net/gh/IKEENOO/dals.by/press/src/assets/dals_logo.png" alt="logo"/>
			<nav ref={navRef}>
				<a href="/">Главная</a>
				<a href="/#about">О нас</a>
				<a href="/#molds">Пресс-формы</a>
				<a href="/#contact">Контакты</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;