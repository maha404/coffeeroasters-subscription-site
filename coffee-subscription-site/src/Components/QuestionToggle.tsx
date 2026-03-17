import type { ReactNode } from "react"
import iconArrow from '../assets/plan/desktop/icon-arrow.svg'

interface Props {
    active?: boolean
    title: string
    panelId: string
    buttonId: string
    onToggle: () => void
    children?: ReactNode
}

export default function QuestionToggle({
    active = false,
    title,
    panelId,
    buttonId,
    onToggle,
    children
}: Props) {
    return (
        <section className={`question-toggle ${active ? 'active' : ''}`}>
            <button
                id={buttonId}
                className={`question-toggle-button ${active ? 'active' : ''}`}
                type="button"
                aria-expanded={active}
                aria-controls={panelId}
                onClick={onToggle}
            >
                <span>{title}</span>
                <span><img src={iconArrow} alt="Arrow icon"/></span>
            </button>
            <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!active}
                className="question-toggle-panel"
            >
                {children}
            </div>
        </section>
    )
}