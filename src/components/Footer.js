import React, { Component } from 'react'
import { Link } from 'gatsby'
import FooterLogo from '../assets/img/logo-white.png'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer pt-5">
        <div className="container">
            <div className="row">
            <div className="col-md-6 row">
                <div className="footer-logo">
                    <img src={FooterLogo} alt=""/>
                </div>
                <div className="divider mx-2"/>
                <div className="quote">
                    When quality,<br/>
                    Service and <br/>
                    Price matter most!
                </div>
            </div>

            <div className="footer-info-links col-md-6 row justify-content-end">
                <div className="col-md-4 row align-items-baseline position-relative pl-5">
                    <div className="explore">Explore</div>
                    <ul className="list-unstyled">
                        <li>About</li>
                        <li>Products</li>
                        <li>Solutions</li>
                        <li>Documents</li>
                    </ul>
                </div>
                <div className="col-md-8 row align-items-baseline position-relative pl-5">
                    <div className="explore">Contact</div>
                    <ul className="list-unstyled">
                        <li>Location: <span>Dakville, ON <span className="line">|</span> Edmonton, AB</span></li>
                        <li>Phone: <span>(905) 727-5545  <span className="line">|</span> 1(800) 268-3509</span></li>
                        <li>Email: <span>sales@ncicanada.com</span></li>
                    </ul>
                </div>
            </div>            
            </div>
        </div>
        <div className="container footer-bottom pb-3 mt-5 ">
        <div className="row pt-3">
        <div className="">
            <ul className="list-unstyled d-flex">
                <li>
                    <Link to="/">Tersms and Conditions</Link>
                </li>
                <li>
                    <Link to="/">Sitemap</Link>
                </li>
                <li>
                    <Link to="/">Privacy Policy</Link>
                </li>
            </ul>
        </div>
        <div className="ml-auto">
         © copyright{new Date().getFullYear()}
            {` `}
            <a href="https://www.ncicanada.com">NCI Canada Inc</a>
        </div>
        </div>
        </div>
      </div>
    )
  }
}
