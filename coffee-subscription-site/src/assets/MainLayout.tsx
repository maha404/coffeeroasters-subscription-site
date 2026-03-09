import Navigation from "../Components/Navigation/Navigation";
import NavigationMobile from "../Components/Navigation/NavigationMobile";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";

export default function MainLayout() {
    return (
        <>
            <Navigation />
            {/* <NavigationMobile /> */}
            <Outlet />
            <Footer />
        </>
    );
}
