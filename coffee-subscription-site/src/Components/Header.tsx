
import mobileHero from '../assets/home/mobile/image-hero-coffeepress.jpg'
import tabletHero from '../assets/home/tablet/image-hero-coffeepress.jpg'
import desktopHero from '../assets/home/desktop/image-hero-coffeepress.jpg'
import NavigationMobile from './NavigationMobile'
import Button from './Button'

export default function Header() {
    return (
        <header>
            <NavigationMobile />
            <section className="header-section">
            <picture>
                <source media="(min-width: 768px)" srcSet={tabletHero} />
                <source media="(min-width: 1440px)" srcSet={desktopHero} />
                <img src={mobileHero} alt="" />
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