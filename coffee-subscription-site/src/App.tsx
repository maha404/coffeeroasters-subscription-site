import './App.css'
import Header from './Components/Header';
import Footer from './Components/Footer';
import CollectionSection from './Components/CollectionSection/CollectionSection';
import BenefitSection from './Components/BenefitSection/BenefitSection';
import HowItWorksSection from './Components/HowItWorksSection/HowItWorksSection';

function App() {

  return (
    <div className='main-container'>
      <Header />
      <CollectionSection  />
      <BenefitSection />
      <HowItWorksSection />
      <Footer />
    </div>
  )
}

export default App
