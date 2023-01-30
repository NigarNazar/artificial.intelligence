import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import { Brand } from './components/Brand';
import { Apply } from './components/Apply';
import { Awesome } from './components/Awesome';
function App() {
  return (
 <div div className='wrapper'>
<Navbar />
<Introduction />
<Brand />
<Apply />
<Awesome />
 </div>
  );
}

export default App;
