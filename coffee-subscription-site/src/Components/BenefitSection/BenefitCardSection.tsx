import BenefitCard from "./BenefitCard";
import bestQuality from "../../assets/home/desktop/icon-coffee-bean.svg";
import exclusiveBenefits from "../../assets/home/desktop/icon-gift.svg";
import freeShipping from "../../assets/home/desktop/icon-truck.svg";



export default function BenefitCardSection() {
    return (
        <section className="benefit-card-section">
            <BenefitCard title='Best quality' description='Discover an endless variety of the world’s best artisan coffee from each of our roasters.' img={bestQuality} />
            <BenefitCard title='Exclusive benefits' description='Special offers and swag when you subscribe, including 30% off your first shipment.' img={exclusiveBenefits} />
            <BenefitCard title='Free shipping' description='We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.' img={freeShipping} />
        </section>
    )
}