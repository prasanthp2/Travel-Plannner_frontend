import { Route, Routes, BrowserRouter,NavLink} from 'react-router-dom';
import "./App.css";

import './Home.css';
import Home from './component/Home';
import About from './component/About';
import Explore from './component/Explore';
import Login from './component/Login';
import Signup from './component/Signup';
import Contact from './component/Contact';
import { MdTravelExplore } from "react-icons/md";
import Destination from './component/Destination';

function App() {
  return (
    <div className="App">
      <section className='navBarSection'>
        <header className='icon'>
        
          <div className='logoDiv'>
            <a href="#" className='logo flex'>
            <h1><MdTravelExplore/>Travel.</h1>
           </a>
           
          </div>
         
          </header>
      </section>
      <BrowserRouter>
      <ul>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink  to='/'>Home</NavLink ></li>
        <li><NavLink  to='/contact'>Contact</NavLink ></li>
        <li><NavLink to='/login'>Login</NavLink ></li>
        <li><NavLink  to='/signup'>Signup</NavLink ></li>
        <li><NavLink  to='/explore'>Explore</NavLink ></li>
        <li><NavLink  to='/destination'>Destination</NavLink ></li>
      </ul>
      
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Destination" element={<Destination />}/>
        <Route path="/Explore" element={<Explore />}/>
        <Route path="/Signup" element={<Signup />}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;