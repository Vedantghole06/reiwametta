
import Home from './pages/Home'
import Contribute from './pages/Contribute'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Initiative from './pages/Initiative'
import Events from './pages/Events'
import Src from './pages/Src'
import About from './pages/About'
import Register from './pages/Register'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/src" element={<Src />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contribute" element={<Contribute />} />
        <Route path="/initiative" element={<Initiative />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App