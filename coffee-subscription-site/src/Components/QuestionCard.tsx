interface Props {
    active?: boolean
    text: string
    panelId: string
    labelledBy: string
}

export default function QuestionCard({
    active = false,
    text,
    panelId,
    labelledBy
}: Props) {
    return (
        <div
            id={panelId}
            role="region"
            aria-labelledby={labelledBy}
            className={`question-card ${active ? 'active' : ''}`}
        >
            <p>{text}</p>
        </div>
    )
}