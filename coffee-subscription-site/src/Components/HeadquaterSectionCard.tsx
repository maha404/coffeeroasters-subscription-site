
interface props {
    imageSrc: string;
    altText: string;
    country: string;
    street: string;
    city: string;
    state: string;
    phone: string;
}

export default function HeadquartersSection(props: props) {
    return (
        <section className="headquarters-section">
            <img src={props.imageSrc} alt="" />
            <div className='headquarters-text'>
                <h2>{props.country}</h2>
                <p>{props.street}</p>
                <p>{props.city}</p>
                <p>{props.state}</p>
                <p>{props.phone}</p>
            </div>
        </section>
    )
}