import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './scan-documents.css'

const ScanDocuments = (props) => {
  return (
    <div className="scan-documents-container">
      <Helmet>
        <title>Scan-Documents - Newhomes Mobile app</title>
        <meta
          property="og:title"
          content="Scan-Documents - Newhomes Mobile app"
        />
      </Helmet>
      <Header
        PageName="Scan Documents"
        rootClassName="header-root-class-name9"
      ></Header>
      <div className="scan-documents-container1">
        <Link to="/documents" className="scan-documents-navlink">
          <svg viewBox="0 0 1024 1024" className="scan-documents-icon">
            <path d="M670.165 737.835l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-256 256c-16.683 16.683-16.683 43.691 0 60.331l256 256c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
          </svg>
        </Link>
      </div>
      <div className="scan-documents-container2">
        <span className="scan-documents-text List">
          These files will be uploaded to Case No: 1234
        </span>
      </div>
      <img
        alt="image"
        src="/playground_assets/lens.png"
        className="scan-documents-image"
      />
    </div>
  )
}

export default ScanDocuments
