import React, { Component } from 'react'
import {Link} from 'gatsby'

export default class TopBar extends Component {
  render() {
    return (
      <div className="top-nav py-2">
        <div className="container">
            <div className="d-flex align-items-center justify-content-end">
                <div className="d-flex align-items-center">
                    Languages
                    <ul className="list-unstyled d-flex">
                        <li>
                            <Link to="/" className="active">English</Link>
                        </li>
                        <li>
                            <Link to="/">French</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
