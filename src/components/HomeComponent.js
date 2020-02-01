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
import FooterComponent from './FooterComponent'




class HomeComponent extends React.Component{
    render(){
        return(
            <div>
                <HeaderComponent />
<section class="banner-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <h4>Caring for better life</h4>
                    <h1>Leading the way in medical excellence</h1>
                    <p>Earth greater grass for good. Place for divide evening yielding them that. Creeping beginning over gathered brought.</p>
                    <a href="/Appointment" class="template-btn mt-3">take appointment</a>
                </div>
            </div>
        </div>
    </section>

    <section class="feature-area section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="single-feature text-center item-padding">
                        <img src={feature1} alt=""/>
                        <h3>advance technology</h3>
                        <p class="pt-3">Health administration, healthcare administration, healthcare management or hospital management is the field relating to leadership, management, and administration of public health systems, health care systems, hospitals,and hospital networks in all the primary, secondary, and tertiary sectors</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="single-feature text-center item-padding mt-4 mt-md-0">
                        <img src={feature2} alt=""/>
                        <h3>comfortable place</h3>
                        <p class="pt-3">Hospital administrators are individuals or groups of people who act as the central point of control within hospitals. These individuals may be previous or current clinicians, or individuals with other healthcare backgrounds. There are two types of administrators, generalists and specialists.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="single-feature text-center item-padding mt-4 mt-lg-0">
                        <img src= {feature3} alt=""/>
                        <h3>quality equipment</h3>
                        <p class="pt-3">Generalists are individuals who are responsible for managing or helping to manage an entire facility. Specialists are individuals who are responsible for the efficient and effective operations of a specific department such as policy analysis, finance, accounting, budgeting, human resources, or marketing.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="single-feature text-center item-padding mt-4 mt-lg-0">
                        <img src={feature4} alt=""/>
                        <h3>friendly staff</h3>
                        <p class="pt-3">There are a variety of different professional associations related to health systems management, which can be subcategorized as either personal or institutional membership groups. Personal membership groups are joined by individuals, and typically have individual skills and career development as their focus. Larger personal membership groups include the Healthcare Financial Management Association, and the Healthcare Information and Management Systems Society.</p>
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
    
<FooterComponent />
            </div>
        )
    }
}

export default HomeComponent