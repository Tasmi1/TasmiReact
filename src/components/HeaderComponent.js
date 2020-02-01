import React from 'react'
import './creative.min.css'
import LogoComponent from './logo/LogoComponent'
import AboutContainer from './about/AboutContainer'
import UserInsert from './UserInsert'
import UserDisplay from './UserDisplay'
import UserUpdate from './UserUpdate'
import BodySection from './BodySection'
import LoginComponent from './LoginComponent'
import Register from './RegistrationComponent'
import {Route,NavLink, Switch } from 'react-router-dom'
import './css/assets/images/logo/favicon.png'
import './css/assets/css/animate-3.7.0.css'
import './css/assets/css/font-awesome-4.7.0.min.css'
import './css/assets/css/bootstrap-4.1.3.min.css'
// import './css/assets/css/owl-carousel.min.css'
import './css/assets/css/jquery.datetimepicker.min.css'
import './css/assets/css/style.css'
import Appointment from './Appointment'
import HomeComponent from './HomeComponent'
import dashboard from './dashboard'
import Doctorscomponent from './Doctorscomponent'



class HeaderComponent extends React.Component{
    state = {
        userid : 56789
    }

    //function clickevent
    clickevent = () =>{
    alert("Data deleted")
}

   //function updateEvent
    updateEvent = () =>{
        this.setState({userid : 99999})
    }

    render(){
        return(
            <div>
          <nav>
            
    
    
    <header class="header-area">
        <div class="header-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9 d-md-flex">
                        <h6 class="mr-3"><span class="mr-2"><i class="fa fa-mobile"></i></span> call us now! +1 305 708 2563</h6>
                        <h6 class="mr-3"><span class="mr-2"><i class="fa fa-envelope-o"></i></span> medical@example.com</h6>
                        <h6><span class="mr-2"><i class="fa fa-map-marker"></i></span> Find our Location</h6>
                    </div>
                    <div class="col-lg-3">
                        <div class="social-links">
                            <ul>
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                <li><a href="#"><i class="fa fa-vimeo"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
       
        <div id="header" id="home">
            <div class="container">
                <div class="row align-items-center justify-content-between d-flex">
                <div id="logo">
                    <a href="index.html"><img src="assets/images/logo/logo.png" alt="" title="" /></a>
                </div>
                <nav id="nav-menu-container">
                    <ul class="nav-menu">
                        <li class="menu-active"><a href="/">Home</a></li>
                        <li><a href="doctors.html">doctors</a></li>
                    
                        <li class="menu-has-children"><a href="#">blog</a>
                           
                        </li>
                        <li><a href= "/Login">Login</a></li>			          				          
                    </ul>
                </nav>	    		
                </div>
            </div>
        </div>
        </div>
    </header>
   
 



           </nav>

          
                      <Switch>
                      
                      <Route path="/UserInsert" component={UserInsert}/>
                      <Route path="/AboutContainer"component={AboutContainer}/>
                      <Route path="/UserDisplay" component={UserDisplay}/>
                     <Route path="/UserUpdate/:id" component={UserUpdate}/>
                     <Route path='/HomeComponent' component={HomeComponent}/>
                     <Route path='/Doctorscomponent' component={Doctorscomponent}/>

         
         
                    </Switch>
                    </div>
          
        )
     
        
       
    }
}


export default HeaderComponent