import React, { Component } from 'react'

export default class Subscribe extends Component {
  render() {
    return (
      <div className="subscribe d-flex align-items-center">
        <div className="container">
            <div className="d-flex">
                <div className="text d-flex align-items-center">
                    Subscribe today for the latest news, products and company developments.
                </div>
                <div className="subscribe-input ml-auto">
                    <form className="d-flex">
                        <input type="email" value="" name="email" placeholder="Enter your email here"/>
                        <button className="btn">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
