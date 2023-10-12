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
    <Route path="/" exact component={<Login/>} />
    <Route path="/signup" exact component={<Signup/>} />
     </Routes>
   </Router>

    </div>
  );
}

export default App;
