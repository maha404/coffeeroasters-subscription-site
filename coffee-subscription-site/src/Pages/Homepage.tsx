import Header from '../Components/Header';
import Footer from '../Components/Footer';
import CollectionSection from '../Components/CollectionSection/CollectionSection';
import BenefitSection from '../Components/BenefitSection/BenefitSection';
import HowItWorksSection from '../Components/HowItWorksSection/HowItWorksSection';

export default function Homepage() {
    return (
        <>
            <Header />
            <CollectionSection />
            <BenefitSection />
            <HowItWorksSection />
            <Footer />
        </>
    );
}
