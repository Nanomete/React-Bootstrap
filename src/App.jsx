import { useState } from 'react'
import './App.css'
import Nav from "./components/Nav.jsx";
import Slide from "./components/Slide.jsx";
import Gallary from "./components/Gallary.jsx";
import Footer from "./components/Footer.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
      <header className="App-header bg-dark">
        <div className="p-2">
          <Nav/>
        </div>
      </header>
      <section className="App-section">
        <Slide/>
        <div className="container text-center p-3 show_icon">
          <i className="fa-solid fa-file"></i>
        </div>
        <Gallary/>
      </section>
      <footer className="bg-dark">
        <Footer/>
      </footer>
    </div>
    </>
  )
}

export default App
