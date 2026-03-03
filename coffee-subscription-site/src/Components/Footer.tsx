import logo from "../assets/shared/desktop/footer-logo.png";
import facebook from "../assets/shared/desktop/icon-facebook.svg";
import twitter from "../assets/shared/desktop/icon-twitter.svg";
import instagram from "../assets/shared/desktop/icon-instagram.svg";

export default function Footer() {
    return (
        <footer>
            <img src={logo} alt="Company logo" />
            <ul className="footer-items">
                <li>Home</li>
                <li>About us</li>
                <li>Create your plan</li>
            </ul>
            <div className="icon-container">
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={instagram} alt="" />
            </div>
        </footer>
    )
}