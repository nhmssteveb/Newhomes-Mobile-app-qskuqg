import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import ContactsSmall from '../components/contacts-small'
import Footer from '../components/footer'
import './messaging-sj.css'

const MessagingSJ = (props) => {
  return (
    <div className="messaging-sj-container">
      <Helmet>
        <title>MessagingSJ - Newhomes Mobile app</title>
        <meta property="og:title" content="MessagingSJ - Newhomes Mobile app" />
      </Helmet>
      <div className="messaging-sj-container1">
        <Header
          PageName="Messaging"
          rootClassName="header-root-class-name13"
        ></Header>
        <div className="messaging-sj-container2">
          <Link to="/messaging-sj" className="messaging-sj-navlink">
            <ContactsSmall
              title="Call Centre"
              subtitle="Karen Jones"
              image_src="/playground_assets/woman-small.jpg"
              rootClassName="rootClassName2"
              className="messaging-sj-component1"
            ></ContactsSmall>
          </Link>
          <Link to="/messaging-gs" className="messaging-sj-navlink1">
            <ContactsSmall
              title="Mortgage Advisor"
              subtitle="Gill Smith"
              image_src="/playground_assets/advisor-small.jpg"
              rootClassName="rootClassName3"
              className="messaging-sj-component2"
            ></ContactsSmall>
          </Link>
        </div>
        <div className="messaging-sj-container3">
          <span className="messaging-sj-text Heading">Sandra Jones</span>
          <img
            alt="image"
            src="/playground_assets/message2.png"
            className="messaging-sj-image"
          />
        </div>
        <Footer rootClassName="footer-root-class-name9"></Footer>
      </div>
    </div>
  )
}

export default MessagingSJ
