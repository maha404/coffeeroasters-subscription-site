import PreferencesListItem from "./PreferenceListItem";

interface props {
    preferencesActive?: boolean
    beanTypeActive?: boolean
    quantityActive?: boolean
    grindOptionActive?: boolean
    deliveryActive?: boolean
}

export default function PreferencesList(props : props) {
    return (
        <div className="preferences-list">
            <PreferencesListItem number="01" text="Preferences" active={props.preferencesActive} />
            <hr />
            <PreferencesListItem number="02" text="Bean Type" active={props.beanTypeActive}/>
            <hr />
            <PreferencesListItem number="03" text="Quantity" active={props.quantityActive}/>
            <hr />
            <PreferencesListItem number="04" text="Grind Option" active={props.grindOptionActive}/>
            <hr />
            <PreferencesListItem number="05" text="Deliveries" active={props.deliveryActive}/>
        </div>
    )
}