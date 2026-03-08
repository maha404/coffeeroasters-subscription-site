import CollectionSectionCard from "./CollecionSectionCard"
import CollectionHeader from "./CollectionHeader"
import grandEspresso from "../../assets/home/desktop/image-gran-espresso.png"
import planalto from "../../assets/home/desktop/image-planalto.png"
import piccollo from "../../assets/home/desktop/image-piccollo.png"
import danche from "../../assets/home/desktop/image-danche.png"

export default function CollectionSection() {
    return (
        <section className="collection-section">
            <CollectionHeader />
            <div className="collection-card-container">
                <CollectionSectionCard title="Gran Espresso" description="Light and flavorful with cocoa and black pepper notes." img={grandEspresso} />
                <CollectionSectionCard title="Planalto" description="Brazilian dark roast with rich and velvety body, and hints of fruits and nuts." img={planalto} />
                <CollectionSectionCard title="Piccollo" description="Mild and smooth blend featuring notes of toasted almond and dried cherry." img={piccollo} />
                <CollectionSectionCard title="Danche" description="Ethiopian hand-harvested blend densely packed with vibrant fruit notes." img={danche} />
            </div>
        </section>
    )
}