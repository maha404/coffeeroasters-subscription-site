import { Children } from "react"

interface Props {
    active?: boolean
    title: string
    panelId: string
    buttonId: string
    onToggle: () => void
}

export default function QuestionToggle({
    active = false,
    title,
    panelId,
    buttonId,
    onToggle
}: Props) {
    return (
            <button
                id={buttonId}
                className={`question-toggle-button ${active ? 'active' : ''}`}
                type="button"
                aria-expanded={active}
                aria-controls={panelId}
                onClick={onToggle}
            >
                <span>{title}</span>
               
               
                
            </button>
    )
}