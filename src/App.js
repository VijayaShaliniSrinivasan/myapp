import './App.css';
import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Header/Navbar';
import Home from './Components/Header/Home';
import About from './Components/Header/About';
import Services from './Components/Header/Services';
import Contact from './Components/Header/Contacts';
import Signup from './Components/Header/Signup';
import Login from './Components/Header/Login';




function App() {
  return (
   <>
   <Navbar/>
     <Routes>
         <Route exact path='/' element={<Home/>}>Home</Route>
         <Route exact path='/about' element={<About/>}>Home</Route>
         <Route exact path='/service' element={<Services/>}>Home</Route>
         <Route exact path='/contact' element={<Contact/>}>Home</Route>
         <Route exact path='/signup' element={<Signup/>}>Home</Route>
         <Route exact path='/login' element={<Login/>}>Home</Route>
     </Routes>
    
   </>
      
  );
}

export default App;