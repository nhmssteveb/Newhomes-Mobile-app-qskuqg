import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import ContactsSmall from '../components/contacts-small'
import Footer from '../components/footer'
import './messaging-gs.css'

const MessagingGS = (props) => {
  return (
    <div className="messaging-gs-container">
      <Helmet>
        <title>MessagingGS - Newhomes Mobile app</title>
        <meta property="og:title" content="MessagingGS - Newhomes Mobile app" />
      </Helmet>
      <div className="messaging-gs-container1">
        <Header
          PageName="Messaging"
          rootClassName="header-root-class-name2"
        ></Header>
        <div className="messaging-gs-container2">
          <Link to="/messaging-sj" className="messaging-gs-navlink">
            <ContactsSmall
              title="Call Centre"
              subtitle="Karen Jones"
              image_src="/playground_assets/woman-small.jpg"
              rootClassName="rootClassName"
              className="messaging-gs-component1"
            ></ContactsSmall>
          </Link>
          <Link to="/messaging-sj" className="messaging-gs-navlink1">
            <ContactsSmall
              title="Mortgage Advisor"
              subtitle="Gill Smith"
              image_src="/playground_assets/advisor-small.jpg"
              rootClassName="rootClassName1"
              className="messaging-gs-component2"
            ></ContactsSmall>
          </Link>
        </div>
        <div className="messaging-gs-container3">
          <span className="messaging-gs-text Heading">Gill Smith</span>
          <img
            alt="image"
            src="/playground_assets/message.png"
            className="messaging-gs-image"
          />
        </div>
        <Footer rootClassName="footer-root-class-name4"></Footer>
      </div>
    </div>
  )
}

export default MessagingGS
