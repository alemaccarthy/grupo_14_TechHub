import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import Searchbar from './Searchbar';

function Header() {
    const [isNavOpen, setNavOpen] = useState(false); // Estado para controlar la visibilidad del menú
    const deviceWidth = window.innerWidth;

    // Función para abrir el menú
    const openNav = () => {
        setNavOpen(true);
    }

    // Función para cerrar el menú
    const closeNav = () => {
        setNavOpen(false);
    }

    useEffect(() => {
        const navbar = document.getElementById('right-floating-nav');

        if (isNavOpen) {
            navbar.style.opacity = '1';
            if (deviceWidth < 768) {
                navbar.style.width = '100%';
            } else if (deviceWidth >= 768) {
                navbar.style.display = 'flex';
                navbar.style.opacity = '1';
            }
        } else {
            navbar.style.opacity = '0';
            if (deviceWidth < 768) {
                navbar.style.width = '0';
            } else if (deviceWidth >= 768) {
                navbar.style.display = 'none';
                navbar.style.opacity = '0';
            }
        }
    }, [isNavOpen, deviceWidth]);

    return (
        <header id="header">
            <section id="main-header">
                <section className="main-header-left">
                    <a href="/"><img id="logo" src="/imgs/logo-iso/LogoTechHub_Principal.png" alt="logo" /></a>
                    <section className="left-list left-nav" id="left-nav">
                        <div className="tienda-nav nav-button">
                            <button>
                                <a href="/products/catalog/apple">Tienda</a>
                            </button>
                        </div>
                        <div className="smartphone-nav nav-button">
                            <button>
                                <a href="/products/catalog/apple/smartphone">Smartphones</a>
                            </button>
                        </div>
                        <div className="smartwatch-nav nav-button">
                            <button>
                                <a href="/products/catalog/apple/smartwatch">Smartwatch</a>
                            </button>
                        </div>
                        <div className="tablet-nav nav-button">
                            <button>
                                <a href="/products/catalog/apple/tablet">Tablets</a>
                            </button>
                        </div>
                        <section className="main-drop-container">
                            {/* Contenido del drop-container */}
                        </section>
                        <section className="drop-container drop-cont-smartphone">
                            {/* Contenido del drop-container para smartphone */}
                        </section>
                        <section className="drop-container drop-cont-smartwatch">
                            {/* Contenido del drop-container para smartwatch */}
                        </section>
                        <section className="drop-container drop-cont-tablet">
                            {/* Contenido del drop-container para tablet */}
                        </section>
                        <article className="dropdown dropdown-smartphone">
                            {/* Lógica para renderizar productos de smartphone */}
                        </article>
                        <article className="dropdown dropdown-smartwatch">
                            {/* Lógica para renderizar productos de smartwatch */}
                        </article>
                        <article className="dropdown dropdown-tablet">
                            {/* Lógica para renderizar productos de tablet */}
                        </article>
                    </section>
                </section>
                <Cart />
                <section className="main-header-right">
                    <ul className="right-list">
                        <li id="ma-glass">
                            <button>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </li>
                        <li id="cart">
                            <button className="btn-cart">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </button>
                        </li>
                        <li id="user" onClick={openNav}>
                            <button>
                                <i className="fa-solid fa-user"></i>
                            </button>
                        </li>
                        <li id="bars" onClick={isNavOpen ? closeNav : openNav}>
                            <button>
                                <i className={`fa-solid fa-${isNavOpen ? 'times' : 'bars'}`}></i>
                            </button>
                        </li>
                    </ul>
                </section>
            <Navbar />
            </section>
            <Searchbar />
            <nav className="brands">
                <a id="home-1" href="/apple">
                    <img id="apple" src="/imgs/marcas-logos/Apple-logo-blanco.png" alt="" />
                </a>
                <a id="home-2" href="/samsung">
                    <img id="samsung" src="/imgs/marcas-logos/logo-samsung-nav-s-blanca.png" alt="" />
                </a>
            </nav>
        </header>
    );
}

export default Header;
