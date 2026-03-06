

interface props {
    title: string;
    description: string;
    img: string;
}

export default function BenefitCard(props: props) {
    return (
        <section className="benefit-card">
            <img src={props.img} alt="" />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </section>
    )
}