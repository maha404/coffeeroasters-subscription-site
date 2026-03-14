import UkIcon from '../assets/about/desktop/illustration-uk.svg'
import CanadaIcon from '../assets/about/desktop/illustration-canada.svg'
import AustraliaIcon from '../assets/about/desktop/illustration-australia.svg'
import HeadquartersSectionCard from './HeadquaterSectionCard';

export default function HeadquartersSection() {
    return (
        <section className="headquarters-section">
            <div className='headquarters-text'>
                <h2>Our headquarters</h2>
                <div className='headquarters-cards'>
                    <HeadquartersSectionCard
                    imageSrc={UkIcon}
                    altText="United Kingdom"
                    country="United Kingdom"
                    street="68 Asfordby Rd"
                    city="Alcaston"
                    state="SY6 1YA"
                    phone="+44 1241 918425"
                    />
                    <HeadquartersSectionCard
                    imageSrc={CanadaIcon}
                    altText="Canada"
                    country="Canada"
                    street="1528 Eglinton Avenue"
                    city="Toronto"
                    state="Ontario M4P 1A6"
                    phone="+1 416 485 2997"
                    />
                    <HeadquartersSectionCard
                    imageSrc={AustraliaIcon}
                    altText="Australia"
                    country="Australia"
                    street="36 Swanston Street"
                    city="Kewell"
                    state="Victoria 3101"
                    phone="+61 4 9928 3629"
                    />
                </div>
            </div>
        </section>
    )
}