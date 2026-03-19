import Button from "./Button"

interface props {
    drinkingPreference: string
    coofeeType: string
    grindOption: string
    quantity: string
    deliveryFrequency: string
}


export default function OrderSummarySection(props: props) {
    return (
        <div className="order-summary-container">
            <div className="order-summary-section">
                <h2>Order Summary</h2>
                <p>“I drink my coffee using <span className="highlight">{props.drinkingPreference}</span>, with a <span className="highlight">{props.coofeeType}</span> type of bean. <span className="highlight">{props.quantity}</span>, sent to me <span className="highlight">{props.deliveryFrequency}</span>.”</p>
            </div>
            <Button text="Create your plan" />
        </div>
    )
}