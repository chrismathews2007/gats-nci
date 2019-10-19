import React, { Component } from 'react'
import TopBar from './Header/TopBar'
import CenterHeader from './Header/CenterHeader'
import Navigation from './Header/Navigation'


export default class Header extends Component {

  render() {

    return (
      <>
        <TopBar/>
        <CenterHeader/>
        <Navigation/>
      </>
    )
  }
}
