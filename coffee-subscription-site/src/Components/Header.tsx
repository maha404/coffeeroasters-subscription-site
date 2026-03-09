
import mobileHero from '../assets/home/mobile/image-hero-coffeepress.jpg'
import tabletHero from '../assets/home/tablet/image-hero-coffeepress.jpg'
import desktopHero from '../assets/home/desktop/image-hero-coffeepress.jpg'
import Button from './Button' 

export default function Header() {
    return (
        <header>
            <section className="header-section">
            <picture>
                <source media="(min-width: 1024px)" srcSet={desktopHero} />
                <source media="(min-width: 768px)" srcSet={tabletHero} />
                <img src={mobileHero} alt="Coffee being pressed in a French press" />
            </picture>
            <div className="header-content">
                <h1>Great coffee made simple.</h1>
                <p>
                Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.
                </p>
                <Button text="Create your plan" />
            </div>
            </section>
        </header>
    )
}