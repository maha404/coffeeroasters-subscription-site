import PreferencesListItem from "./PreferenceListItem";

export default function PreferencesList() {
    return (
        <div className="preferences-list">
            <PreferencesListItem number="01" text="Preferences" active={true} />
            <hr />
            <PreferencesListItem number="02" text="Bean Type" />
            <hr />
            <PreferencesListItem number="03" text="Quantity" />
            <hr />
            <PreferencesListItem number="04" text="Grind Option" />
            <hr />
            <PreferencesListItem number="05" text="Deliveries" />
        </div>
    )
}