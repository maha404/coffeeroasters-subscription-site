
import logo from "../../assets/shared/desktop/logo.svg";

export default function Navigation() {
    return (
        <nav className="navbar-desktop">
            <div>
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <ul className="menu-items">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Create your plan</a></li>
            </ul>
        </nav>
    );
}