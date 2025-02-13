
// import Home from './pages/Home'
import Contribute from './pages/Contribute'
// import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Initiative from './pages/Initiative'
import Events from './pages/Events'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/events" element={<Events />} />
        <Route path="/contribute" element={<Contribute />} />
        <Route path="/initiative" element={<Initiative />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App