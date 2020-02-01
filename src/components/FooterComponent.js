import React from 'react'

import './creative.min.css'
import LogoComponent from './logo/LogoComponent'
import AboutContainer from './about/AboutContainer'
import UserInsert from './UserInsert'
import UserDisplay from './UserDisplay'
import UserUpdate from './UserUpdate'
import LoginComponent from './LoginComponent'
import {Route,NavLink, Switch } from 'react-router-dom'
import './css/assets/images/logo/favicon.png'
import './css/assets/css/animate-3.7.0.css'
import './css/assets/css/font-awesome-4.7.0.min.css'
import './css/assets/css/bootstrap-4.1.3.min.css'
// import './css/assets/css/owl-carousel.min.css'
import './css/assets/css/jquery.datetimepicker.min.css'
import './css/assets/css/style.css'


class FooterComponent extends React.Component{

    render()
    {
        return(

            <div>
                <footer class="footer-area section-padding">
        
        <div class="footer-copyright">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-6">
                        <span>
{/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | the clinic <i class="fa fa-heart-o" aria-hidden="true"></i> <a href="https://colorlib.com" target="_blank"></a>
{/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
</span>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="social-icons">
                            <ul>
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                                <li><a href="#"><i class="fa fa-behance"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>



            </div>





            // <div>
            //   <div>This is my footer</div>
            //   <h1>{this.props.company_address}</h1>
            // </div>

//             <footer className="bg-light py-5">
//            <div className="container">
//       <div className="small text-center text-muted">Copyright &copy; 2019 - Start Bootstrap</div>
//     </div>
//   </footer>
           
        )
    }
}

export default FooterComponent