import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Caregivers from './Components/Caregivers';
function App() {
  return (
    <div className="App">
     
    <Navbar></Navbar>
   <Caregivers></Caregivers>
   <Caregivers></Caregivers>
   <Caregivers></Caregivers>
   <Caregivers></Caregivers>
   <Caregivers></Caregivers>


    </div>
  );
}

export default App;
