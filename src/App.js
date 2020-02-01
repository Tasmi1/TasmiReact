import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import HomeComponent from './components/HomeComponent'
import Doctorscomponent from './components/Doctorscomponent'
import Login from './components/LoginComponent'
import {BrowserRouter, Route} from 'react-router-dom'
import Appointment from './components/Appointment'
import dashboard from './components/dashboard'
import UserProfile from './components/UserProfile';
import RegistrationComponent from './components/RegistrationComponent';
import Addpatient from './components/Patient/Addpatient'
import Adddoctor from './components/Doctor/Adddoctor';
import appointmentdetails from './components/appointmentdetails'

function App() {
  return (
    <BrowserRouter>
    
      

       <Route path ="/" exact component={HomeComponent}/>
       <Route path ='/Appointment' component={Appointment}/>
       <Route path ='/Doctorscomponent' component={Doctorscomponent} />
       <Route path ='/dashboard' component={dashboard} />
       <Route path  = '/HeaderComponent' component={HeaderComponent} />
       <Route path  = '/Login' component={Login} />
       <Route path = '/register' component={RegistrationComponent} />
      <Route path = '/FooterComponent' component={FooterComponent} />
      <Route path = '/UserProfile' component={UserProfile}/> 
      <Route path = '/addpatient' component={Addpatient} />
      <Route path = '/adddoctor' component={Adddoctor}/>
      <Route path = '/appointmentdetails' component={appointmentdetails} />

    </BrowserRouter>
    
  );
}

export default App;
