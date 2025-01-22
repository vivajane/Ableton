
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Shop from './pages/Shop'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/Login'
import Move from './pages/Move'
import Overview from './pages/Overview'
// import More from './components/More'
import Moree from './pages/Moree'
import Buy from './pages/Buy'

function App() {
  return (
    <div className=''>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage className/>}></Route>
        <Route path='shop' element={<Shop/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='move' element={<Move/>}>
          <Route path='overview' element={<Overview title="Get Started with Move" />} />
          <Route path='specs' element={<Moree title="Move Tech Specs" />} />
          <Route path='more' element={<Buy title="Learn more" />} />
          {/* <Route path='buy' element={<MoveProp title="Buy More" />} /> */}
        </Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
