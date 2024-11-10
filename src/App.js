import './App.scss'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/Home/home'
import About from './components/About/about'
import Contact from './components/Contact/contact'
import Portfolio from './components/Portfolio/portfolio'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
