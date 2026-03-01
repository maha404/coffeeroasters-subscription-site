import './App.css'
import Button from '../Components/Button';

function App() {

  return (
    <>
     <Button text="Create your plan" onClick={() => alert("Subscribed!")} disabled={false} />
    
     <Button text="Create your plan" onClick={() => alert("Subscribed!")} disabled={true} />
    </>
  )
}

export default App
