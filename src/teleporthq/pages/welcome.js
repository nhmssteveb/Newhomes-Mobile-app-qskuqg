import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './welcome.css'

const Welcome = (props) => {
  return (
    <div className="welcome-container">
      <Helmet>
        <title>Welcome - Newhomes Mobile app</title>
        <meta property="og:title" content="Welcome - Newhomes Mobile app" />
      </Helmet>
      <Header
        PageName="Welcome"
        rootClassName="header-root-class-name5"
      ></Header>
      <div className="welcome-container1">
        <img
          alt="image"
          src="/playground_assets/loveapp.png"
          className="welcome-image"
        />
      </div>
      <div className="welcome-container2">
        <ul className="welcome-ul Heading list">
          <li className="welcome-li list-item">
            <span className="welcome-text List">
              You have 5 New Notifications
            </span>
          </li>
          <li className="welcome-li1 list-item">
            <span className="List">You have 2 New Emails</span>
          </li>
          <li className="list-item">
            <span className="List">You have 0 New Chat Messages</span>
          </li>
        </ul>
      </div>
      <Footer rootClassName="footer-root-class-name3"></Footer>
    </div>
  )
}

export default Welcome
