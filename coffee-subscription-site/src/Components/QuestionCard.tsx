interface Props {
    text: string
    option: string
    inputId: string
    name: string
    checked?: boolean
    onChange: () => void
}

export default function QuestionCard({
    text,
    option,
    inputId,
    name,
    checked = false,
    onChange
}: Props) {
    return (
        <label className={`question-card ${checked ? 'active' : ''}`} htmlFor={inputId}>
            <input
                id={inputId}
                className="question-card-input"
                type="radio"
                name={name}
                value={option}
                checked={checked}
                onChange={onChange}
            />
            <h3>{option}</h3>
            <p>{text}</p>
        </label>
    )
}