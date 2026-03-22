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
import OrderSummarySection from "../Components/OrderSummarySection"
import Modal from "../Components/Modal"

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
    const [isModalOpen, setIsModalOpen] = useState(false)

    const preferenceProgress = {
        preferencesActive: Boolean(selectedAnswers['drinkingPreference']),
        beanTypeActive: Boolean(selectedAnswers['coffeeType']),
        quantityActive: Boolean(selectedAnswers['quantity']),
        grindOptionActive: Boolean(selectedAnswers['grindOption']),
        deliveryActive: Boolean(selectedAnswers['deliveryFrequency'])
    }

    const handleToggle = (questionId: string) => {
        setOpenQuestionId((previous) => previous === questionId ? null : questionId)
    }

    const handleCardSelect = (questionId: string, option: string) => {
        setSelectedAnswers((previous) => ({
            ...previous,
            [questionId]: option
        }))
    }

    const openModal = () => {
        setIsModalOpen(true);
    }

    return (
        <div className="page-container">
            <Modal open={isModalOpen} drinkingPreference={selectedAnswers.drinkingPreference} coofeeType={selectedAnswers.coffeeType} quantity={selectedAnswers.quantity} grindOption={selectedAnswers.grindOpstion} deliveryFrequency={selectedAnswers.deliveryFrequency}/>
            <Header
                title="Create a plan"
                text="Coffee the you wanted it to be. For coffee deliverd tomorrow or next week. Forwhatever brew method you use. For choice, for convenience, for quality."
                buttonVisible={false}
                imageDesktop={desktopHero}
                imageTablet={tabletHero}
                imageMobile={mobileHero}
            />
            <HowItWorksSection  howItWorksStyling="backgroundColor"/>
            <section className="subscription-section">
                <PreferencesList {...preferenceProgress} />
                <div className="preferences-section">
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
                <OrderSummarySection
                    drinkingPreference={selectedAnswers['drinkingPreference'] || '___'}
                    coofeeType={selectedAnswers['coffeeType'] || '___'}
                    grindOption={selectedAnswers['grindOption'] || '___'}
                    quantity={selectedAnswers['quantity'] || '___'}
                    deliveryFrequency={selectedAnswers['deliveryFrequency'] || '___'}
                    selectedAnswers={Object.keys(selectedAnswers).length}
                    onClick={openModal}
                />
                </div>
                
            </section>
        </div>
    )
}