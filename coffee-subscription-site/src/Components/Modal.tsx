import Button from "./Button";

export default function Modal() {
    return (
        <div className="modal">
            <h2 className="modal-header">Order Summary</h2>
            <p className="modal-quote">“I drink my coffee as Filter, with a Decaf type of bean. 250g ground ala Cafetiére, sent to me Every Week.”</p>
            <p className="modal-text">Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. </p>
            <div className="modal-footer">
                <p>$14.00/ mo</p>
                <Button text="Checkout" />
            </div>
        </div>
    )
}