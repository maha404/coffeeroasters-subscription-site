import logo from "../../assets/shared/desktop/logo.svg";
import { Link } from "react-router";

export default function Navigation() {
    return (
        <nav className="navbar-desktop">
            <div>
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <ul className="menu-items">
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/subscribe">Create your plan</Link></li>
            </ul>
        </nav>
    );
}