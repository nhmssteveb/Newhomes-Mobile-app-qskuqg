import React from 'react'

import PropTypes from 'prop-types'

import './header.css'

const Header = (props) => {
  return (
    <footer className={`header-footer ${props.rootClassName} `}>
      <div className="header-container">
        <div data-thq="thq-dropdown" className="header-thq-dropdown list-item">
          <div
            data-thq="thq-dropdown-toggle"
            className="header-dropdown-toggle"
          >
            <svg viewBox="0 0 1024 1024" className="header-hamburger">
              <path
                d="M64 192h896v192h-896zM64 448h896v192h-896zM64 704h896v192h-896z"
                className=""
              ></path>
            </svg>
          </div>
          <ul data-thq="thq-dropdown-list" className="header-dropdown-list">
            <li data-thq="thq-dropdown" className="header-dropdown list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="header-dropdown-toggle1"
              >
                <span className="header-text">Sub-menu Item</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="header-dropdown1 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="header-dropdown-toggle2"
              >
                <span className="header-text1">Sub-menu Item</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="header-dropdown2 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="header-dropdown-toggle3"
              >
                <span className="header-text2">Sub-menu Item</span>
              </div>
            </li>
          </ul>
        </div>
        <span className="header-text3 Heading">{props.PageName}</span>
      </div>
    </footer>
  )
}

Header.defaultProps = {
  PageName: 'PageName',
  rootClassName: '',
}

Header.propTypes = {
  PageName: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Header
