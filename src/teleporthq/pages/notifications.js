import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './notifications.css'

const Notifications = (props) => {
  return (
    <div className="notifications-container">
      <Helmet>
        <title>Notifications - Newhomes Mobile app</title>
        <meta
          property="og:title"
          content="Notifications - Newhomes Mobile app"
        />
      </Helmet>
      <Header
        PageName="Notifications"
        rootClassName="header-root-class-name10"
      ></Header>
      <div className="notifications-container1">
        <img
          alt="image"
          src="/playground_assets/notifications2.png"
          className="notifications-image"
        />
      </div>
      <Footer rootClassName="footer-root-class-name8"></Footer>
    </div>
  )
}

export default Notifications
