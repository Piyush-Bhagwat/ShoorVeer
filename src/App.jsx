import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Caregivers from './Components/Caregivers';
import Login from './Components/Login';
import Signup from './Components/Signup';
import PatientSignup from './Components/PatientSignup';
import VolunteerSignup from './Components/VolunteerSignup';
function App() {
  return (
    <div className="App">
     
    <Navbar/>
   <Router>
    <Routes>
    <Route path="/"  element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/home" element={<Caregivers/>} />
    <Route path="/patientsignup" element={<PatientSignup/>} />
    <Route path="/volunteersignup" element={<VolunteerSignup/>} />
     </Routes>
   </Router>
    </div>
  );
}

export default App;
