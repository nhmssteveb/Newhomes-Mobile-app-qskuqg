import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import ContactCard from '../components/contact-card'
import Footer from '../components/footer'
import './contacts.css'

const Contacts = (props) => {
  return (
    <div className="contacts-container">
      <Helmet>
        <title>Contacts - Newhomes Mobile app</title>
        <meta property="og:title" content="Contacts - Newhomes Mobile app" />
      </Helmet>
      <Header
        PageName="Contacts"
        rootClassName="header-root-class-name"
      ></Header>
      <div className="contacts-container1">
        <img
          alt="image"
          src="/playground_assets/lightgrey.png"
          className="contacts-image"
        />
      </div>
      <div className="contacts-container2">
        <div className="contacts-gallery">
          <ContactCard
            Name="Sandra Jones"
            JobTitle="Your HelpDesk Contact"
            image_src="/playground_assets/advisor.jpg"
            rootClassName="rootClassName1"
          ></ContactCard>
          <ContactCard
            Name="Gill Smith"
            JobTitle="Your Mortgage Advisor"
            rootClassName="contact-card-root-class-name"
          ></ContactCard>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </div>
  )
}

export default Contacts
