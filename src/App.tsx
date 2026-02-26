import './App.css'
import Navbar from './Navbar/navbar'
import Home from './pages/Home'

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main>
        <Home />
      </main>
    </div>
  )
}

export default App
