import React from 'react'

import PropTypes from 'prop-types'

import './password.css'

const Password = (props) => {
  return (
    <div className="password-container">
      <input
        type="password"
        name="Password"
        required
        placeholder={props.Password_placeholder}
        className="password-password input"
      />
      <svg viewBox="0 0 1024 1024" className="password-eye">
        <path d="M4.523 492.928c-5.803 11.691-6.229 25.728 0 38.144 0 0 16.896 33.664 47.787 78.635 19.243 27.989 44.288 61.099 74.965 94.635 38.144 41.771 85.504 84.779 141.611 119.467 68.053 42.069 149.589 72.192 243.115 72.192s175.061-30.123 243.115-72.192c56.107-34.688 103.467-77.696 141.611-119.467 30.635-33.536 55.723-66.645 74.965-94.635 30.891-44.971 47.787-78.635 47.787-78.635 5.803-11.691 6.229-25.728 0-38.144 0 0-16.896-33.664-47.787-78.635-19.243-27.989-44.288-61.099-74.965-94.635-38.144-41.771-85.504-84.779-141.611-119.467-68.053-42.069-149.589-72.192-243.115-72.192s-175.061 30.123-243.115 72.192c-56.107 34.688-103.467 77.696-141.611 119.467-30.677 33.536-55.723 66.603-74.965 94.635-30.891 44.971-47.787 78.635-47.787 78.635zM91.307 512c6.955-11.989 17.365-29.056 31.317-49.408 17.493-25.429 40.107-55.296 67.627-85.376 34.347-37.589 75.733-74.923 123.477-104.448 57.6-35.584 123.776-59.435 198.272-59.435s140.672 23.851 198.229 59.435c47.744 29.525 89.131 66.859 123.477 104.448 27.477 30.080 50.133 59.947 67.627 85.376 13.995 20.352 24.405 37.376 31.317 49.408-6.955 11.989-17.365 29.056-31.317 49.408-17.493 25.429-40.107 55.296-67.627 85.376-34.347 37.589-75.733 74.923-123.477 104.448-57.557 35.584-123.733 59.435-198.229 59.435s-140.672-23.851-198.229-59.435c-47.744-29.525-89.131-66.859-123.477-104.448-27.477-30.080-50.133-59.947-67.627-85.376-13.995-20.352-24.405-37.419-31.36-49.408zM682.667 512c0-47.104-19.157-89.856-50.005-120.661s-73.557-50.005-120.661-50.005-89.856 19.157-120.661 50.005-50.005 73.557-50.005 120.661 19.157 89.856 50.005 120.661 73.557 50.005 120.661 50.005 89.856-19.157 120.661-50.005 50.005-73.557 50.005-120.661zM597.333 512c0 23.595-9.515 44.843-25.003 60.331s-36.736 25.003-60.331 25.003-44.843-9.515-60.331-25.003-25.003-36.736-25.003-60.331 9.515-44.843 25.003-60.331 36.736-25.003 60.331-25.003 44.843 9.515 60.331 25.003 25.003 36.736 25.003 60.331z"></path>
      </svg>
    </div>
  )
}

Password.defaultProps = {
  Password_placeholder: 'Password',
}

Password.propTypes = {
  Password_placeholder: PropTypes.string,
}

export default Password