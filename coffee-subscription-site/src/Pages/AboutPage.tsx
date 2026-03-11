import Header from '../Components/Header'
import desktopHero from '../assets/about/desktop/image-hero-whitecup.jpg'
import tabletHero from '../assets/about/tablet/image-hero-whitecup.jpg'
import mobileHero from '../assets/about/mobile/image-hero-whitecup.jpg'
import OurCommitment from '../Components/OurCommitmentSection/OurCommitment';

export default function AboutPage() {
    return (
        <>
            <Header 
            imageDesktop={desktopHero} 
            imageMobile={mobileHero}
            imageTablet={tabletHero}
            title="About us"
            text="Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment."
            buttonVisible={false} 
            />
            <OurCommitment />
        </>
    )
}