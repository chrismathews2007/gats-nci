import React, { Component } from 'react'

import Pic1 from '../../assets/img/solutions/fire-protection.png'
import Pic2 from '../../assets/img/solutions/industrial.png'
import Pic3 from '../../assets/img/solutions/commercial.png'
import Pic4 from '../../assets/img/solutions/irrigation.png'

export default class Solutions extends Component {
  render() {
    return (
      <div className="solutions text-center py-5">
        <div className="container">
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <h3>Solutions</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="solution-list position-relative">
                    <img src={Pic1} alt=""/>
                    <div className="position-absolute title d-flex align-items-center justify-content-center">
                        Fire Protection
                    </div>
                </div>
                <div className="solution-list position-relative">
                    <img src={Pic2} alt=""/>
                    <div className="position-absolute title d-flex align-items-center justify-content-center">
                        Fire Protection
                    </div>
                </div>
                <div className="solution-list position-relative">
                    <img src={Pic3} alt=""/>
                    <div className="position-absolute title d-flex align-items-center justify-content-center">
                        Fire Protection
                    </div>
                </div>
                <div className="solution-list position-relative">
                    <img src={Pic4} alt=""/>
                    <div className="position-absolute title d-flex align-items-center justify-content-center">
                        Fire Protection
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
