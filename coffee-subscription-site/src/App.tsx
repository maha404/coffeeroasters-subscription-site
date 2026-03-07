import './App.css'
import Header from './Components/Header';
import Footer from './Components/Footer';
import CollectionSection from './Components/CollectionSection';
import BenefitSection from './Components/BenefitSection';
import HowItWorksSection from './Components/HowItWorksSection';

function App() {

  return (
    <div className='main-container'>
      <Header />
      {/* <Navigation /> */}
      <CollectionSection  />
      <BenefitSection />
      <HowItWorksSection />
      <Footer />
    </div>
  )
}

export default App
