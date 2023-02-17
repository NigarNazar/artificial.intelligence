import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {BrowserRouter ,Routes ,Route} from "react-router-dom"
import Navbar from './components/Navbar'
import  Footer  from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Notfound from './pages/Notfound';

function App() {
  return (
 <>
 <BrowserRouter>
 <Navbar />
<Routes>
<Route path='/' element={<Home />} />
<Route path='/about' element={<About />} />
<Route path='/service' element={<Service />} />
<Route path='/blog' element={<Blog />} />
<Route path='/contact' element={<Contact />} />
<Route path='*' element= {<Notfound />} />
</Routes>
<Footer />
 </BrowserRouter>

 </>

  );
}

export default App;
