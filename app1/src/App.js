import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage';
import { BrowserRouter,Routes,Route,NavLink } from 'react-router-dom';
import Contactpage from './Contactpage';
import Menupage from './Menupage';

function App() {
  return (
    <BrowserRouter>                                                                                                                                                                                                                                                                                                            
    <div className="App">
     <NavLink to={""} >Homepage</NavLink> 
     <NavLink to="contact">Contact</NavLink>
     <NavLink to="menu">menupage</NavLink>
     <Routes>
      <Route path='' element={<Homepage/>}></Route>
      <Route path='contact' element={<Contactpage/>}></Route>
      <Route path='menu' element={<Menupage/>}></Route>
     </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
