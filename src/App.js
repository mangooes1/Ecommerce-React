
import './App.css';
import Home from './screens/Home'
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
   <Router>
    <div>
      <Routes>
      <Route exact path='/' element={<Home />}/>
      </Routes>
    </div>
   </Router>
  );
}

export default App;
