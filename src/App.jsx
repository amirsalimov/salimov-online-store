
import Header from './copmanent/Header/Header'
import Footer from './copmanent/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Login from './copmanent/Login/Login'
function App() {


  return (
    <>
    <Header/>
   <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/login' element={<Login/>} />
   </Routes>
   <Footer/>
     
    </>
    
  )
}


export default App
