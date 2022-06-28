import React from 'react'
import Navbar from './navbar';
import {BrowserRouter ,Routes, Route} from 'react-router-dom';
import Home from './home'
import Contact from './contact';
import About from './about';

const App = ()=> {

return(
    <div  >
      <BrowserRouter>
      <div className='App'>
      <Navbar />
      <Routes>
      <Route path = '/' element ={<Home/>}/>
      <Route path = '/about' element ={<About/>}/>
      <Route path = '/contact' element ={<Contact/>}/>
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}


export default App;
