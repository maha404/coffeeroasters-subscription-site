import { useState } from "react"
import Header from "../Components/Header"
import desktopHero from '../assets/plan/desktop/image-hero-blackcup.jpg'
import tabletHero from '../assets/plan/tablet/image-hero-blackcup.jpg'
import mobileHero from '../assets/plan/mobile/image-hero-blackcup.jpg'
import HowItWorksSection from "../Components/HowItWorksSection/HowItWorksSection"
import PreferencesList from '../Components/PreferencesList'
import QuestionCard from "../Components/QuestionCard"
import QuestionToggle from "../Components/QuestionToggle"
import questionsData from '../data/subscriptionQuestions.json'

interface QuestionOption {
    value: string
    label: string
    description: string
}

interface SubscriptionQuestion {
    id: string
    title: string
    name: string
    options: QuestionOption[]
}

type SelectedAnswers = Record<string, string>

const subscriptionQuestions = questionsData as SubscriptionQuestion[]

export default function SubscribePage() {
    const [openQuestionId, setOpenQuestionId] = useState<string | null>(subscriptionQuestions[0]?.id ?? null)
    const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({})

    const handleToggle = (questionId: string) => {
        setOpenQuestionId((previous) => previous === questionId ? null : questionId)
    }

    const handleCardSelect = (questionId: string, option: string) => {
        setSelectedAnswers((previous) => ({
            ...previous,
            [questionId]: option
        }))
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
            {subscriptionQuestions.map((question) => {
                const panelId = `${question.id}-panel`
                const buttonId = `${question.id}-button`

                return (
                    <QuestionToggle
                        key={question.id}
                        title={question.title}
                        panelId={panelId}
                        buttonId={buttonId}
                        active={openQuestionId === question.id}
                        onToggle={() => handleToggle(question.id)}
                    >
                        <div className="question-card-list" aria-labelledby={buttonId}>
                            {question.options.map((option) => (
                                <QuestionCard
                                    key={option.value}
                                    text={option.description}
                                    option={option.label}
                                    inputId={`${question.id}-${option.value.toLowerCase().replace(/\s+/g, '-')}`}
                                    name={question.name}
                                    checked={selectedAnswers[question.id] === option.value}
                                    onChange={() => handleCardSelect(question.id, option.value)}
                                />
                            ))}
                        </div>
                    </QuestionToggle>
                )
            })}
        </div>
    )
}