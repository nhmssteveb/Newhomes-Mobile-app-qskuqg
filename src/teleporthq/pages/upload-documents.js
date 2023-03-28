import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './upload-documents.css'

const UploadDocuments = (props) => {
  return (
    <div className="upload-documents-container">
      <Helmet>
        <title>Upload-Documents - Newhomes Mobile app</title>
        <meta
          property="og:title"
          content="Upload-Documents - Newhomes Mobile app"
        />
      </Helmet>
      <div className="upload-documents-container1">
        <Link to="/documents" className="upload-documents-navlink">
          <svg viewBox="0 0 1024 1024" className="upload-documents-icon">
            <path d="M670.165 737.835l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-256 256c-16.683 16.683-16.683 43.691 0 60.331l256 256c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
          </svg>
        </Link>
      </div>
      <div className="upload-documents-container2">
        <span className="upload-documents-text List">
          These files will be uploaded to Case No: 1234
        </span>
      </div>
      <img
        alt="image"
        src="/playground_assets/file upload.png"
        className="upload-documents-image"
      />
      <div className="upload-documents-container3">
        <select size="50" required className="upload-documents-select">
          <option value="Any">Any</option>
          <option value="Pay Slips">Pay Slips</option>
          <option value="ID">ID</option>
          <option value="P60">P60</option>
        </select>
      </div>
      <button name="Add a File" autoFocus className="upload-documents-button">
        <span className="upload-documents-text1">
          <span>
            ADD
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="upload-documents-text3">
            A
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>FILE</span>
        </span>
      </button>
      <Header
        PageName="Upload Documents"
        rootClassName="header-root-class-name7"
      ></Header>
    </div>
  )
}

export default UploadDocuments
