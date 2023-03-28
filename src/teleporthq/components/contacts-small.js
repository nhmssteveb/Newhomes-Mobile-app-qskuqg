import React from 'react'

import PropTypes from 'prop-types'

import './contacts-small.css'

const ContactsSmall = (props) => {
  return (
    <div className={`contacts-small-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="contacts-small-image"
      />
      <div className="contacts-small-container">
        <h1 className="contacts-small-text">{props.title}</h1>
        <span className="contacts-small-text1">{props.subtitle}</span>
      </div>
    </div>
  )
}

ContactsSmall.defaultProps = {
  rootClassName: '',
  image_alt: 'image',
  title: 'Project Title',
  image_src:
    'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fG1pbmltYWxpc20lMjBjb3VjaHxlbnwwfHx8fDE2MjY0NDg1NTk&ixlib=rb-1.2.1&h=1000',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
}

ContactsSmall.propTypes = {
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  title: PropTypes.string,
  image_src: PropTypes.string,
  subtitle: PropTypes.string,
}

export default ContactsSmall
