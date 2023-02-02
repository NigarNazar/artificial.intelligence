import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import {Brand }  from './components/Brand';
import { Apply } from './components/Apply';
import { Carousell } from './components/Carousell';
import { Awesome } from './components/Awesome';
import { Footer } from './components/Footer';


function App() {
  return (
 <div div className='wrapper'>
<Navbar />
<Introduction />
<Brand />
<Apply />
<Carousell />
<Awesome />
<Footer />
 </div>

  );
}

export default App;
