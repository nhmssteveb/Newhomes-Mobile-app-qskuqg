import React from 'react'

import PropTypes from 'prop-types'

import './username.css'

const Username = (props) => {
  return (
    <div className="username-container">
      <div className="username-container1">
        <input
          type="text"
          name="Username"
          required
          autoFocus
          placeholder={props.Username_placeholder}
          className="username-username input"
        />
        <svg viewBox="0 0 1024 1024" className="username-person">
          <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
        </svg>
      </div>
    </div>
  )
}

Username.defaultProps = {
  Username_placeholder: 'UserName',
}

Username.propTypes = {
  Username_placeholder: PropTypes.string,
}

export default Username
