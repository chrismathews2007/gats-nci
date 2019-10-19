import React, { Component } from 'react'

import Brand1 from '../../assets/img/brands/nci.png'
import Brand2 from '../../assets/img/brands/flow.png'
import Brand3 from '../../assets/img/brands/ssi.png'
import Brand4 from '../../assets/img/brands/lesso.png'
import Brand5 from '../../assets/img/brands/nibco.png'

export default class Brands extends Component {
  render() {
    return (
      <div className="py-5">
        <div className="container">
            <h4>Brands</h4>
            <div className="d-flex justify-content-between px-3 mt-3">
                <div className="d-flex align-items-center justify-content-center" style={{height: "90px", width:"100px"}}>
                    <img src={Brand1} alt="" className="w-100"/>
                </div>
                <div className="d-flex align-items-center justify-content-center" style={{height: "90px", width:"100px"}}>
                    <img src={Brand2} alt="" className="w-100"/>
                </div>
                <div className="d-flex align-items-center justify-content-center" style={{height: "90px", width:"100px"}}>
                    <img src={Brand3} alt="" className="w-100"/>
                </div>
                <div className="d-flex align-items-center justify-content-center" style={{height: "90px", width:"100px"}}>
                    <img src={Brand4} alt="" className="w-100"/>
                </div>
                <div className="d-flex align-items-center justify-content-center" style={{height: "90px", width:"100px"}}>
                    <img src={Brand5} alt="" className="w-100"/>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
