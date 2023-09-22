import React from 'react';
import logoTechHub from '../assets/images/LogoTechHub_Blanca.png';

function Sidebar() {
    return (
        <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                <div className="sidebar-brand-icon">
                    <img className="w-100" src={logoTechHub} alt="TechHub" />
                </div>
            </a>

            {/* Divider */}
            <hr className="sidebar-divider my-0" />

            {/* Nav Item - Dashboard */}
            <li className="nav-item active">
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard - TechHub</span>
                </a>
            </li>

            {/* Divider */}
            <hr className="sidebar-divider" />

        </ul>
    );
}

export default Sidebar;
