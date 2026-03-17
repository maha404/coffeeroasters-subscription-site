interface Props {
    active?: boolean
    text: string
    option: string
    panelId: string
    labelledBy: string
    onClick?: () => void
}

export default function QuestionCard({
    active = false,
    text,
    option,
    panelId,
    labelledBy, 
    onClick
}: Props) {
    return (
        <div
            id={panelId}
            role="region"
            aria-labelledby={labelledBy}
            className={`question-card ${active ? 'active' : ''}`}
            onClick={onClick}
        >
            <h3>{option}</h3>
            <p>{text}</p>
        </div>
    )
}