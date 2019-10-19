import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Banner from '../components/index/Banner'
import Solutions from '../components/index/Solutions'
import LatestProducts from '../components/products/LatestProducts'
import About from '../components/index/About'
import Brands from '../components/index/Brands'
import Subscribe from '../components/index/Subscribe'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Banner/>
    <Solutions/>
    <LatestProducts/>
    <About/>
    <Brands/>
    <Subscribe/>
  </Layout>
)

export default IndexPage
