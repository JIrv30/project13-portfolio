import { useEffect, useState } from 'react'
import Navigationbar from './components/Navigationbar';
import Home from './components/Home'
import Footer from './components/Footer'
import Projects from './components/Projects'
import CV from './components/CV'
import About from './components/About'
import Preloader from './components/Pre'
import ScrollToTop from './components/ScrollToTop'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom"


function App() {
  const [load, setLoad] = useState(true)

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoad(false)
    },1200)
    return () => clearTimeout(timer)
  },[])

  return (
    <Router>
      <Preloader load={load} />
      <div className='app' id={load ? 'no-scroll' : 'scroll'}>
        <Navigationbar />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='project' element={<Projects />} />
          <Route path='about' element={<About />} />
          <Route path='cv' element={<CV />} />
          <Route path='*' element={<Navigate to='/' />} />

        </Routes>
        <Footer />

      </div>
    </Router>
  )
}

export default App
