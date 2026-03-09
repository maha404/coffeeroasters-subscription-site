import Header from '../Components/Header';
import CollectionSection from '../Components/CollectionSection/CollectionSection';
import BenefitSection from '../Components/BenefitSection/BenefitSection';
import HowItWorksSection from '../Components/HowItWorksSection/HowItWorksSection';
import mobileHero from '../assets/home/mobile/image-hero-coffeepress.jpg'
import tabletHero from '../assets/home/tablet/image-hero-coffeepress.jpg'
import desktopHero from '../assets/home/desktop/image-hero-coffeepress.jpg'

export default function Homepage() {
    return (
        <>
            <Header 
            imageDesktop={desktopHero} 
            imageMobile={mobileHero} 
            imageTablet={tabletHero}  
            title="Great coffee made simple."
            text="Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule."
            buttonVisible={true} 
            />
            <CollectionSection />
            <BenefitSection />
            <HowItWorksSection />
        
        </>
    );
}
