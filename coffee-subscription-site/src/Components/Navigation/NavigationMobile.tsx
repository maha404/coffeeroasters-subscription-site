import { useState } from "react";
import logo from "../../assets/shared/desktop/logo.svg";
import hamburgerIcon from "../../assets/shared/mobile/icon-hamburger.svg";
import closeIcon from "../../assets/shared/mobile/icon-close.svg";
import { Link } from "react-router";

export default function NavigationMobile() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <img src={logo} alt="Logo" className="logo" />
                <button
                    className="hamburger"
                    aria-label="Toggle navigation"
                    aria-expanded={isOpen}
                    onClick={toggleMenu}
                >
                    <img src={isOpen ? closeIcon : hamburgerIcon} alt="" />
                </button>
            </div>
            <ul className={isOpen ? "nav-menu nav-open" : "nav-menu nav-closed"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/subscribe">Create your plan</Link></li>
            </ul>
        </nav>
    );
}