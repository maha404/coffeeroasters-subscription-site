import { useState } from "react"
import Header from "../Components/Header"
import desktopHero from '../assets/plan/desktop/image-hero-blackcup.jpg'
import tabletHero from '../assets/plan/tablet/image-hero-blackcup.jpg'
import mobileHero from '../assets/plan/mobile/image-hero-blackcup.jpg'
import HowItWorksSection from "../Components/HowItWorksSection/HowItWorksSection"
import PreferencesList from '../Components/PreferencesList'
import QuestionCard from "../Components/QuestionCard"
import QuestionToggle from "../Components/QuestionToggle"

export default function SubscribePage() {
    const [isQuestionOpen, setIsQuestionOpen] = useState(false)

    const handleToggle = () => {
        setIsQuestionOpen((previous) => !previous)
    }

    const handleCardClick = () => {
        // Change to active state of the card
        console.log("Card clicked");
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
            <QuestionToggle
                title="How do you drink your coffee?"
                panelId="question-1-panel"
                buttonId="question-1-button"
                active={isQuestionOpen}
                onToggle={handleToggle}
            >
                <div className="question-card-list">
                <QuestionCard
                    active={isQuestionOpen}
                    text="Compatible with Nespresso systems and similar brewers"
                    option="Capsule"
                    panelId="question-1-card"
                    labelledBy="question-1-button"
                    onClick={handleCardClick}
                />
                <QuestionCard
                    active={isQuestionOpen}
                    text="For pour over or drip methods like Aeropress, Chemex, and V60"
                    option="Filter"
                    panelId="question-1-card"
                    labelledBy="question-1-button"
                />
                <QuestionCard
                    active={isQuestionOpen}
                    text="Dense and finely ground beans for an intense, flavorful experience"
                    option="Espresso"
                    panelId="question-1-card"
                    labelledBy="question-1-button"
                />
                </div>
            </QuestionToggle>
        </div>
    )
}