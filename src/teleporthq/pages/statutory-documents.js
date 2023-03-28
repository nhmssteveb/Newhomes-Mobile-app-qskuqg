import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './statutory-documents.css'

const StatutoryDocuments = (props) => {
  return (
    <div className="statutory-documents-container">
      <Helmet>
        <title>Statutory-Documents - Newhomes Mobile app</title>
        <meta
          property="og:title"
          content="Statutory-Documents - Newhomes Mobile app"
        />
      </Helmet>
      <Header
        PageName="Statutory Documents"
        rootClassName="header-root-class-name12"
      ></Header>
      <div className="statutory-documents-container1">
        <Link to="/documents" className="statutory-documents-navlink">
          <svg viewBox="0 0 1024 1024" className="statutory-documents-icon">
            <path d="M670.165 737.835l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-256 256c-16.683 16.683-16.683 43.691 0 60.331l256 256c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
          </svg>
        </Link>
      </div>
      <div className="statutory-documents-container2">
        <span className="statutory-documents-text List">
          Documents on Case No: 1234
        </span>
      </div>
      <div className="statutory-documents-container3">
        <ul className="statutory-documents-ul list">
          <li className="statutory-documents-li">
            <span className="statutory-documents-text1">
              New Homes GDPR Statement
            </span>
          </li>
          <li className="statutory-documents-li1 list-item">
            <span className="statutory-documents-text2">
              Sesame GDPR Statement
            </span>
          </li>
          <li className="statutory-documents-li2 list-item">
            <span className="statutory-documents-text3">
              Our Terms &amp; Conditions 
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default StatutoryDocuments
