
interface props {
    title: string;
    description: string;
    img: string;
}

export default function CollectionSection(props: props) {
    return (
            <section className="collection-card">
                <img src={props.img} alt="" />
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </section>
    )
}