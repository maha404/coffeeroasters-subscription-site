import './App.css'
import { Route, Routes } from 'react-router'
import HomePage from './Pages/Homepage'
import AboutPage from './Pages/AboutPage'
import SubscribePage from './Pages/SubscribePage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/subscribe' element={<SubscribePage />} />
      <Route path='*' element={<h1>Page not found</h1>} />
    </Routes>
  )
}

export default App
