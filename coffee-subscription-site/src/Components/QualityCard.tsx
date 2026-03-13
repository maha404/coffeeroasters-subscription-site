import imageDesktop from '../assets/about/desktop/image-quality.jpg';
import imageTablet from '../assets/about/tablet/image-quality.jpg';
import imageMobile from '../assets/about/mobile/image-quality.jpg';

export default function QualityCard() {
    return (
        <section className="quality-card">
           <picture className="quality-card-image">
                <source media="(min-width: 1024px)" srcSet={imageDesktop} />
                <source media="(min-width: 768px)" srcSet={imageTablet} />
                <img src={imageMobile} alt="Coffee being pressed in a French press" />
            </picture>
            <div className='quality-card-text'>
                <h3>Uncompromising quality</h3>
                <p>Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
            </div>  
        </section>
    )
}