
interface props {
    number: string,
    text: string,
    active?: boolean
}

export default function PreferencesListItem(props: props) {
    return (
        <div className="preferences-list">
            <div className={`preferences-list-item ${props.active ? 'active' : ''}`}>
                <p className={`preferences-number ${props.active ? 'active' : ''}`} >{props.number}</p>
                <p className={`preferences-text ${props.active ? 'active' : ''}`}>{props.text}</p>
            </div>
        </div>
    )
}