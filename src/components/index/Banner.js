import React, { Component } from 'react'
import BannerImage from '../../assets/img/banner.png'

export default class Banner extends Component {
  render() {
    return (
      <div id="bannerSlider" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src={BannerImage} class="d-block w-100" alt=""/>
            </div>
        </div>
    </div>
    )
  }
}
