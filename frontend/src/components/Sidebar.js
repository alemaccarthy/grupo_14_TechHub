import React from 'react';
import logoTechHub from '../assets/images/LogoTechHub_Blanca.png';

function Sidebar() {
    return (
        <ul className="navbar-nav" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <a className="sidebar-brand d-flex align-items-center justify-content-start" href="/">
                <div className="sidebar-brand-icon">
                    <img className="logo" src={logoTechHub} alt="TechHub" />
                </div>
            </a>
        </ul>
    );
}

export default Sidebar;
