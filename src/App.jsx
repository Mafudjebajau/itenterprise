import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading/Loading'
import Home from './Pages/Home/Home';
import Itsoft from './Pages/Itsoft/Itsoft';

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/itsoft" element={<Itsoft/>} />
      </Routes>
    </Router>
   
  )
}

export default App