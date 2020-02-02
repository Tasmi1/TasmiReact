import React from 'react'

import Appointment from './Appointment'
import './css/assets/images/logo/favicon.png'
import './css/assets/css/animate-3.7.0.css'
import './css/assets/css/font-awesome-4.7.0.min.css'
import './css/assets/css/bootstrap-4.1.3.min.css'
// import './css/assets/css/owl-carousel.min.css'
import './css/assets/css/jquery.datetimepicker.min.css'
import './css/assets/css/style.css'
import feature1 from './css/assets/images/feature1.png'
import feature2 from './css/assets/images/feature2.png'
import feature3 from './css/assets/images/feature3.png'
import feature4 from './css/assets/images/feature4.png'
import feature5 from './css/assets/images/welcome.png'
import {Route,NavLink, Switch } from 'react-router-dom'
import HeaderComponent from './HeaderComponent'






class Doctorscomponent extends React.Component{
    render(){
        return(
            <div>
  <section class="banner-area other-page">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h1>Our doctors</h1>
                </div>
            </div>
        </div>
    </section>

    <section class="specialist-area section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="section-top text-center">
                        <h2>Our specialish</h2>
                        <p>Green above he cattle god saw day multiply under fill in the cattle fowl a all, living, tree word link available in the service for subdue fruit.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-sm-6">
                    <div class="single-doctor mb-4 mb-lg-0">
                        <div class="doctor-img">
                            <img src="assets/images/doctor1.jpg" alt="" class="img-fluid"/>
                        </div>
                        <div class="content-area">
                            <div class="doctor-name text-center">
                                <h3>ethel davis</h3>
                                <h6>sr. faculty data science</h6>
                            </div>
                            <div class="doctor-text text-center">
                                <p>If you are looking at blank cassettes on the web, you may be very confused at the.</p>
                                <ul class="doctor-icon">
                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                    <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="single-doctor mb-4 mb-lg-0">
                        <div class="doctor-img">
                            <img src="assets/images/doctor2.jpg" alt="" class="img-fluid"/>
                        </div>
                        <div class="content-area">
                            <div class="doctor-name text-center">
                                <h3>dand mories</h3>
                                <h6>sr. faculty plastic surgery</h6>
                            </div>
                            <div class="doctor-text text-center">
                                <p>If you are looking at blank cassettes on the web, you may be very confused at the.</p>
                                <ul class="doctor-icon">
                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                    <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="single-doctor mb-4 mb-sm-0">
                        <div class="doctor-img">
                            <img src="assets/images/doctor3.jpg" alt="" class="img-fluid"/>
                        </div>
                        <div class="content-area">
                            <div class="doctor-name text-center">
                                <h3>align board</h3>
                                <h6>sr. faculty data science</h6>
                            </div>
                            <div class="doctor-text text-center">
                                <p>If you are looking at blank cassettes on the web, you may be very confused at the.</p>
                                <ul class="doctor-icon">
                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                    <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="single-doctor">
                        <div class="doctor-img">
                            <img src="assets/images/doctor4.jpg" alt="" class="img-fluid"/>
                        </div>
                        <div class="content-area">
                            <div class="doctor-name text-center">
                                <h3>jeson limit</h3>
                                <h6>sr. faculty plastic surgery</h6>
                            </div>
                            <div class="doctor-text text-center">
                                <p>If you are looking at blank cassettes on the web, you may be very confused at the.</p>
                                <ul class="doctor-icon">
                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                    <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                                </ul>
                            </div>
                        </div>
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
                        <img src={feature5} alt=""/>
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
    

            </div>
        )
    }
}

export default Doctorscomponent