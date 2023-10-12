import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Caregivers from './Components/Caregivers';
import Login from './Components/Login';
import Signup from './Components/Signup';
function App() {
  return (
    <div className="App">
     
    <Navbar></Navbar>
   <Router>
    <Routes>
    <Route path="/"  element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
     </Routes>
   </Router>
    </div>
  );
}

export default App;
