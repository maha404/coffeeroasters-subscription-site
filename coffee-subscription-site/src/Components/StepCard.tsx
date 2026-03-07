
interface props {
    number: string;
    title: string;
    description: string;
}

export default function StepCard(props : props) {
    return (
        <section className="step-card">
            <h1>{props.number}</h1>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </section>
    )
}