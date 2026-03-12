import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { LanguageProvider } from './contexts/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <div>
        <Navbar />
        <main>
          <Home />
        </main>
      </div>
    </LanguageProvider>
  )
}

export default App
