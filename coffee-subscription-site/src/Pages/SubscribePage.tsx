import Header from "../Components/Header"
import desktopHero from '../assets/plan/desktop/image-hero-blackcup.jpg'
import tabletHero from '../assets/plan/tablet/image-hero-blackcup.jpg'
import mobileHero from '../assets/plan/mobile/image-hero-blackcup.jpg'
import HowItWorksSection from "../Components/HowItWorksSection/HowItWorksSection"
import PreferencesList from '../Components/PreferencesList'
import QuestionToggle from "../Components/QuestionToggle"

export default function SubscribePage() {

    const handleToggle = () => {
        console.log('toggle')
    }

    return (
        <div>
            <Header
                title="Create a plan"
                text="Coffee the you wanted it to be. For coffee deliverd tomorrow or next week. Forwhatever brew method you use. For choice, for convenience, for quality."
                buttonVisible={false}
                imageDesktop={desktopHero}
                imageTablet={tabletHero}
                imageMobile={mobileHero}
            />
            <HowItWorksSection  howItWorksStyling="backgroundColor"/>
            <PreferencesList />
            <QuestionToggle title="How do you drink your coffee?" panelId="1" buttonId="1" onToggle={handleToggle}/>
        </div>
    )
}