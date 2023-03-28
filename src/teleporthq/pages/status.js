import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import ApplicationCard from '../components/application-card'
import Footer from '../components/footer'
import './status.css'

const Status = (props) => {
  return (
    <div className="status-container">
      <Helmet>
        <title>Status - Newhomes Mobile app</title>
        <meta property="og:title" content="Status - Newhomes Mobile app" />
      </Helmet>
      <Header
        PageName="Status"
        rootClassName="header-root-class-name6"
      ></Header>
      <div className="status-container1">
        <img
          alt="image"
          src="/playground_assets/lightgrey.png"
          className="status-image"
        />
      </div>
      <div className="status-container2">
        <div className="status-gallery">
          <ApplicationCard rootClassName="application-card-root-class-name"></ApplicationCard>
          <ApplicationCard rootClassName="application-card-root-class-name1"></ApplicationCard>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name7"></Footer>
    </div>
  )
}

export default Status
