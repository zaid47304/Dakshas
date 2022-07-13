
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Paramedic from './components/Paramedic';
import Healthcare from './components/Healthcare';
import Alert from './components/Alert';
import PatientDetails from './components/PatientDetails'
import MakeRequest from './components/MakeRequest'
import { useState } from 'react';
import Admin from './components/Admin';
import LandingPage from './components/LandngPage';
import AcceptedReqPara from './components/AcceptedReqPara';
import ConfirmedReqPara from './components/ConfirmedReqPara';
function App() {
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500)
  }
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Alert alert={alert} />
   <Routes>
     <Route exact path="/" element={<LandingPage showAlert={showAlert}/>}></Route>
     <Route exact path="/acceptedreqpara" element={<AcceptedReqPara showAlert={showAlert}/>}></Route>
     <Route exact path="/confirmedreqpara" element={<ConfirmedReqPara showAlert={showAlert}/>}></Route>
     <Route exact path="/healthcare" element={<Healthcare showAlert={showAlert}/>}></Route>
     <Route exact path="/admin" element={<Admin showAlert={showAlert}/>}></Route>
     <Route exact path="/login" element={<Login showAlert={showAlert}/>}></Route>
     <Route exact path="/healthcare" element={<Healthcare showAlert={showAlert}/>}></Route>
      <Route exact path="/paramedic" element={<Paramedic showAlert={showAlert}/>}></Route>
      <Route exact path="/patientdetails" element={<PatientDetails showAlert={showAlert}/>} />
      <Route exact path="/makeRequest" element={<MakeRequest showAlert={showAlert}/>} />
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
