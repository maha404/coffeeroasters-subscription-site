
import mobileHero from '../assets/home/mobile/image-hero-coffeepress.jpg'
import NavigationMobile from './NavigationMobile'
import Button from './Button'

export default function Header() {
    return (
        <header>
            <NavigationMobile />
            <section className="header-section">
            <img src={mobileHero} alt="" />
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