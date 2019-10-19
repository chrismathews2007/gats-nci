import React, { Component } from 'react'

import Compnay from '../../assets/img/company.png'

export default class About extends Component {
  render() {
    return (
      <div className="row mx-0 about">
            <div className="col-md-7 px-0">
                <img src={Compnay} alt="" className="w-100"/>
            </div>
            <div className="col-md-5 d-flex align-items-center">
                <div className="col-md-8 pl-5">
                    <h3>About</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button type="button" class="btn btn-light">Learn More</button>
                </div>
            </div>
      </div>
    )
  }
}
