import React from 'react'

import './creative.min.css'
import LogoComponent from './logo/LogoComponent'
import AboutContainer from './about/AboutContainer'
import UserInsert from './UserInsert'
import UserDisplay from './UserDisplay'
import UserUpdate from './UserUpdate'
import LoginComponent from './LoginComponent'
import RegisterComponent from './RegistrationComponent'
import {Route,NavLink, Switch } from 'react-router-dom'
import './css/assets/images/logo/favicon.png'
import './css/assets/css/animate-3.7.0.css'
import './css/assets/css/font-awesome-4.7.0.min.css'
import './css/assets/css/bootstrap-4.1.3.min.css'
// import './css/assets/css/owl-carousel.min.css'
import './css/assets/css/jquery.datetimepicker.min.css'
import './css/assets/css/style.css'
import feature1 from './css/assets/images/feature1.png'



class BodySection extends React.Component{
    render()
    {
        return(
            <nav>

<section class="feature-area section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="single-feature text-center item-padding">
                        <img src={feature1} alt=""/>
                        <h3>advance technology</h3>
                        <p class="pt-3">Creeping for female light years that lesser can't evening heaven isn't bearing tree appear</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="single-feature text-center item-padding mt-4 mt-md-0">
                        <img src="assets/images/feature2.png" alt=""/>
                        <h3>comfortable place</h3>
                        <p class="pt-3">Creeping for female light years that lesser can't evening heaven isn't bearing tree appear</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="single-feature text-center item-padding mt-4 mt-lg-0">
                        <img src="assets/images/feature3.png" alt=""/>
                        <h3>quality equipment</h3>
                        <p class="pt-3">Creeping for female light years that lesser can't evening heaven isn't bearing tree appear</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="single-feature text-center item-padding mt-4 mt-lg-0">
                        <img src="assets/images/feature4.png" alt=""/>
                        <h3>friendly staff</h3>
                        <p class="pt-3">Creeping for female light years that lesser can't evening heaven isn't bearing tree appear</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="welcome-area section-padding3">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 align-self-center">
                    <div class="welcome-img">
                        <img src="assets/images/welcome.png" alt=""/>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="welcome-text mt-5 mt-lg-0">
                        <h2>Welcome to our clinic</h2>
                        <p class="pt-3">Subdue whales void god which living don't midst lesser yielding over lights whose. Cattle greater brought sixth fly den dry good tree isn't seed stars were.</p>
                        <p>Subdue whales void god which living don't midst lesser yielding over lights whose. Cattle greater brought sixth fly den dry good tree isn't seed stars were the boring.</p>
                        <a href="#" class="template-btn mt-3">learn more</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

            <div> 

     
    
    </div>
    </nav>
           
        //     <div className="container">
        //     <h1>Register</h1>
        //     <p>Please fill in this form to create an account.</p>
           
        
        //     <label for="email"><b>Email</b></label>
        //     <input type="text" placeholder="Enter Email" name="email" required></input>
            
        
        //     <label for="psw"><b>Password</b></label>
        //     <input type="password" placeholder="Enter Password" name="psw" required></input>
           
            
        //     <label for="psw-repeat"><b>Repeat Password</b></label>
        //     <input type="password" placeholder="Repeat Password" name="psw-repeat" required></input>

        
        //     <p>By creating an account you agree to our <a href="#">Terms and Privacy</a></p>
        //     <button type="submit" className="registerbtn">Register</button>
        //   </div>
        
        //   <div className="container signin">
        //     <p>Already have an account? <a href="#">Sign in</a>.</p>
        //   </div>
        
        )
    }

    
}

    
export default BodySection