import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Username from '../components/username'
import Password from '../components/password'
import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Newhomes Mobile app</title>
        <meta property="og:title" content="Newhomes Mobile app" />
      </Helmet>
      <div className="login-container1">
        <div className="login-container2">
          <img
            alt="image"
            src="/playground_assets/tp-email-header-image.png"
            className="login-newhomes-logo-big"
          />
          <Username></Username>
          <Password></Password>
          <div className="login-container3">
            <Link
              to="/welcome"
              id="LOgin"
              name="Login"
              className="login-navlink button"
            >
              Login
            </Link>
          </div>
          <div className="login-container4">
            <img
              alt="image"
              src="/playground_assets/lovemortgages.png"
              loading="eager"
              className="login-image"
            />
          </div>
        </div>
        <div className="login-container5">
          <span className="login-text">
            <span>
              Copyright
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>Newhomes </span>
            <span>Mortgage Services LLP 2023</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Login
