import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading/Loading'
import Home from './Pages/Home/Home';
import Itsoft from './Pages/Itsoft/Itsoft';
import Servico from './Pages/Servico/Servico';
import Booking from './Pages/Booking/Booking';
import Shopping from './Pages/Shopping/Shopping';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });

    const timer = setTimeout(() => {
      setLoading(false)
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/itsoft" element={<Itsoft />} />
        <Route path="/servicos/:id" element={<Servico />} />
        <Route path="/booking/:service" element={<Booking />} />
        <Route path="/shopping" element={<Shopping />} />
      </Routes>
    </Router>

  )
}

export default App