

import Button from './Button' 

interface props {
    title: string, 
    text: string, 
    buttonVisible: boolean, 
    imageDesktop: string, 
    imageTablet: string,
    imageMobile: string
}

export default function Header(props : props) {
    return (
        <header>
            <section className="header-section">
            <picture>
                <source media="(min-width: 1024px)" srcSet={props.imageDesktop} />
                <source media="(min-width: 768px)" srcSet={props.imageTablet} />
                <img src={props.imageMobile} alt="Coffee being pressed in a French press" />
            </picture>
            <div className="header-content">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                {props.buttonVisible &&  
                    <Button text="Create your plan" />
                }
            </div>
            </section>
        </header>
    )
}