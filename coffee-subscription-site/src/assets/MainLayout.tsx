import Navigation from "../Components/Navigation/Navigation";
import NavigationMobile from "../Components/Navigation/NavigationMobile";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";
import useScreenSize  from "../screenSizeHook";

export default function MainLayout() {

    const screenSize = useScreenSize();
    return (
        <div className="main-container">
            {screenSize === "mobile" && <NavigationMobile />}
            {screenSize === "desktop" && <Navigation />}
            <Outlet />
            <Footer />
        </div>
    );
}
