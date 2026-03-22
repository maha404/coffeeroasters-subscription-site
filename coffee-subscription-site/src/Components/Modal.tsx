import Button from "./Button";
import { useState } from "react";

interface props {
    open: boolean
    drinkingPreference: string
    coofeeType: string
    grindOption: string
    quantity: string
    deliveryFrequency: string
}

export default function Modal(props : props) {

    const [isVisible, setIsVisible] = useState(props.open)

    const closeModal = () => {
        console.log(isVisible);
        setIsVisible(false);
    }


    return (
        <>
            {props.open && <div className="modal-backdrop"></div>}
            <div className={props.open ? "modal-open" : "modal"}>
                <h2 className="modal-header">Order Summary</h2>
                <p className="modal-quote">“I drink my coffee using <span className="highlight">{props.drinkingPreference}</span>, with a <span className="highlight">{props.coofeeType}</span> type of bean. <span className="highlight">{props.quantity}</span>, sent to me <span className="highlight">{props.deliveryFrequency}</span>.”</p>
                <p className="modal-text">Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. </p>
                <div className="modal-footer">
                    <p>$14.00/ mo</p>
                    <Button text="Checkout" onClick={closeModal}/>
                </div>
            </div>
        </>
    )
}