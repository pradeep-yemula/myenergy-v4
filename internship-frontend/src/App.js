import './App.css';
import Home from './components/Home/Home';
import Footer from './components/Home/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HourlyConsumption from './components/Consumption/HourlyConsumption';
import DailyConsumption from './components/Consumption/DailyConsumption';
import WeeklyConsumption from './components/Consumption/WeeklyConsumption';
import MonthlyConsumption from './components/Consumption/MonthlyConsumption';
import YearlyConsumption from './components/Consumption/YearlyConsumption';
import Login from './components/Login';
import { useState } from 'react';
import Navbar from './components/Home/Navbar';
import Signup from './components/Signup';
import Bills from './components/Bills/Bills';
import Profile from './components/Profile';
import Update from './components/Update';
import Pendingcomplaints from './components/Complaints/Pendingcomplaints';
import Filecomplaints from './components/Complaints/Filecomplaints';
import Outages from './components/Outages/Outages';
import Interuptions from './components/Interruptions/Interuptions';
import Interruptionsform from './components/Interruptions/Interruptionsform';

function App() {
  const [token, setToken] = useState({});
  const [navbar, setNavbar] = useState(false);
  setTimeout(() => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('token_type');
    localStorage.removeItem('username');
    setNavbar(false)
  }, 1800000);
  return (
    <>
    
    <Router basename='/myenergy' >
    <Navbar navbar={navbar} setNavbar={setNavbar}/>
      <Routes>
        <Route exact path='/signup' element={<Signup/>}></Route>
        <Route exact path='/' element={<Login setToken={setToken} setNavbar={setNavbar}/>}></Route>
        <Route exact path='/home' element={< Home token={token} navbar={navbar} setNavbar={setNavbar}/>}/>
        <Route exact path='/HourlyConsumption' element={<HourlyConsumption setNavbar={setNavbar} type='hourly'/>}/>
        <Route exact path='/DailyConsumption' element={<DailyConsumption setNavbar={setNavbar}  type='daily'/>}/>
        <Route exact path='/WeeklyConsumption' element={<WeeklyConsumption setNavbar={setNavbar}  type='weekly'/>}/>
        <Route exact path='/MonthlyConsumption' element={<MonthlyConsumption setNavbar={setNavbar}  type='monthly'/>}/>
        <Route exact path='/YearlyConsumption' element={<YearlyConsumption setNavbar={setNavbar}  type='yearly'/>}/>
        <Route exact path='/PaidBills' element={<Bills setNavbar={setNavbar}  type='paid'/>}></Route>
        <Route exact path='/PendingBills' element={<Bills setNavbar={setNavbar}  key='pending' type='pending' />}></Route>
        <Route exact path='/FailedBills' element={<Bills setNavbar={setNavbar}  key='failed' type='failed' />}></Route>
        <Route exact path='/userinfo' element={<Profile setNavbar={setNavbar}/>}></Route>
        <Route exact path='/update/:type' element={<Update setNavbar={setNavbar}/>}></Route>
        <Route exact path='/pendingcomplaints' element={<Pendingcomplaints setNavbar={setNavbar}/>}></Route>
        <Route exact path='/filecomplaints' element={<Filecomplaints setNavbar={setNavbar}/>}></Route>
        <Route exact path='/scheduled_outages' element={<Outages setNavbar={setNavbar} type='scheduled_outages' key='scheduled_outages'/>}></Route>
        <Route exact path='/active_outages' element={<Outages setNavbar={setNavbar} type='active_outages' key='active_outages'/>}></Route>
        <Route exact path='/interruption/:type/:month' element={<Interuptions setNavbar = {setNavbar}  />}></Route>
        <Route exact path='/interruptions_form' element={<Interruptionsform setNavbar = {setNavbar} />}></Route>
      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
