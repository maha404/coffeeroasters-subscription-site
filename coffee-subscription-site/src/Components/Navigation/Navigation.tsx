
export default function Navigation() {
    return (
        <nav className="navbar-desktop">
            <div>
                <img src="../src/assets/shared/desktop/logo.svg" alt="Logo" className="logo" />
            </div>
            <ul className="menu-items">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Create your plan</a></li>
            </ul>
        </nav>
    );
}