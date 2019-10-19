import React, { Component } from 'react'
import { Link } from 'gatsby'

import Logo from '../../assets/img/logo.png'

export default class CenterHeader extends Component {
  render() {
    return (
      <div className="center-nav py-3">
          <div className="container">
            <div className="d-flex justify-content-between">
              <div className="logo">
                <img src={Logo} alt=""/>
              </div>
              <div className="info d-flex">
                    <div className="info-list d-flex align-items-center">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                        <div>
                         <Link to="/">
                            <div className="nav-top-text">
                                Call us today at
                            </div>
                            <div className="nav-bottom-text">
                                1(800) 268-3509
                            </div>
                        </Link>
                        </div>
                    </div>
                    <div className="info-list d-flex align-items-center">
                        <i class="fa fa-sticky-note" aria-hidden="true"></i>
                        <div>
                         <Link to="/">
                            <div className="nav-top-text">
                                Get customised solution
                            </div>
                            <div className="nav-bottom-text">
                                Request a Quote
                            </div>
                        </Link>
                        </div>
                    </div>
                    <div className="info-list d-flex align-items-center">
                        <i class="fa fa-sign-out" aria-hidden="true"></i>
                        <Link to="/">
                            Login
                        </Link>
                    </div>
                    <div className="info-list d-flex align-items-center">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
