import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './pages/Home/Home.jsx'
import Products from './pages/Products/Products.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      <Footer/>
    </>
  )
}

export default App
