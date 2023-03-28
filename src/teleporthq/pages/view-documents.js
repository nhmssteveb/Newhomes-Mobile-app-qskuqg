import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './view-documents.css'

const ViewDocuments = (props) => {
  return (
    <div className="view-documents-container">
      <Helmet>
        <title>View-Documents - Newhomes Mobile app</title>
        <meta
          property="og:title"
          content="View-Documents - Newhomes Mobile app"
        />
      </Helmet>
      <Header
        PageName="View Documents"
        rootClassName="header-root-class-name11"
      ></Header>
      <div className="view-documents-container1">
        <Link to="/documents" className="view-documents-navlink">
          <svg viewBox="0 0 1024 1024" className="view-documents-icon">
            <path d="M670.165 737.835l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-256 256c-16.683 16.683-16.683 43.691 0 60.331l256 256c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
          </svg>
        </Link>
      </div>
      <div className="view-documents-container2">
        <span className="view-documents-text List">
          Documents on Case No: 1234
        </span>
      </div>
      <div className="view-documents-container3">
        <ul className="view-documents-ul list">
          <li className="view-documents-li">
            <span className="view-documents-text1">Mortgage Details doc</span>
          </li>
          <li className="view-documents-li1 list-item">
            <span className="view-documents-text2">Fact Find</span>
          </li>
          <li className="view-documents-li2 list-item">
            <span className="view-documents-text3">Mortgage Offer </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ViewDocuments
