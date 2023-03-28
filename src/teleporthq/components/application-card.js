import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './application-card.css'

const ApplicationCard = (props) => {
  return (
    <div className={`application-card-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="application-card-image"
      />
      <h2 className="application-card-name">{props.Name}</h2>
      <span className="application-card-job-title">{props.JobTitle}</span>
      <div className="application-card-container">
        <svg viewBox="0 0 1024 1024" className="application-card-phone">
          <path
            d="M981.333 721.92c0.683-30.464-10.069-59.904-28.715-82.901-19.627-24.149-48.171-41.259-82.133-46.080-34.133-4.181-72.32-13.397-110.336-27.563-18.475-6.784-38.101-9.301-57.344-7.424-28.288 2.731-55.765 14.891-77.611 36.48l-30.72 30.72c-75.52-47.659-143.36-113.792-195.541-195.797l30.976-30.976c13.739-14.080 24.021-30.976 30.165-49.323 9.045-26.965 9.131-57.003-1.664-85.803-12.331-32.128-22.101-70.144-27.477-110.72-4.437-30.507-19.413-57.472-41.088-77.013-22.997-20.693-53.589-33.195-86.485-32.853h-127.829c-3.755 0-7.765 0.171-11.648 0.512-35.157 3.2-65.792 20.395-86.741 45.483s-32.341 58.325-29.141 93.824c12.8 131.243 58.24 266.368 137.216 388.352 64.085 102.955 155.648 197.248 268.715 269.056 109.568 72.405 242.517 122.112 387.669 137.856 3.925 0.384 8.149 0.555 12.288 0.555 35.328-0.128 67.328-14.635 90.368-37.845s37.248-55.339 37.12-90.496zM896 721.92v128c0.043 11.947-4.651 22.613-12.373 30.379s-18.304 12.587-30.123 12.629l-3.755-0.171c-130.56-14.208-250.581-59.221-348.757-124.117-103.595-65.835-185.984-150.955-243.285-242.944-72.405-111.787-113.28-233.856-124.757-351.488-1.024-11.435 2.731-22.443 9.771-30.891s17.195-14.080 28.928-15.147l131.712-0.171c11.563-0.128 21.632 4.011 29.312 10.923 7.253 6.571 12.288 15.616 13.781 25.941 6.059 45.739 17.408 90.325 32.299 129.067 3.456 9.216 3.413 19.072 0.427 28.075-2.091 6.187-5.589 11.989-10.325 16.853l-53.845 53.803c-13.824 13.824-16.171 34.731-6.912 51.243 67.584 118.827 163.797 211.499 272.256 272.128 16.939 9.472 37.632 6.144 50.987-7.083l54.187-54.187c7.083-6.997 16.085-10.965 25.515-11.904 6.485-0.64 13.227 0.213 19.584 2.56 43.605 16.256 88.32 27.136 129.451 32.171 10.283 1.451 19.712 7.083 26.24 15.147 6.272 7.723 9.856 17.579 9.643 29.099z"
            className=""
          ></path>
        </svg>
        <Link to="/messaging-gs" className="application-card-navlink">
          <svg viewBox="0 0 1024 1024" className="application-card-chat">
            <path
              d="M768 298.667c23.125 0 42.667 19.541 42.667 42.667v298.667c0 23.125-19.541 42.667-42.667 42.667h-341.333-35.371l-7.296 7.296v-7.296h-128c-23.125 0-42.667-19.541-42.667-42.667v-298.667c0-23.125 19.541-42.667 42.667-42.667h512M768 213.333h-512c-70.4 0-128 57.6-128 128v298.667c0 70.4 57.6 128 128 128h42.667v128l128-128h341.333c70.4 0 128-57.6 128-128v-298.667c0-70.4-57.6-128-128-128z"
              className=""
            ></path>
          </svg>
        </Link>
        <a
          href="mailto:steveb@newhomesadvice.co.uk?subject=Case ref 1234"
          className="application-card-link"
        >
          <svg viewBox="0 0 1024 1024" className="application-card-email">
            <path
              d="M512 470l342-214h-684zM854 768v-426l-342 212-342-212v426h684zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"
              className=""
            ></path>
          </svg>
        </a>
      </div>
      <div className="application-card-container1">
        <span className="application-card-text Heading">{props.text}</span>
      </div>
    </div>
  )
}

ApplicationCard.defaultProps = {
  JobTitle: 'Your Contact',
  image_alt: 'image',
  rootClassName: '',
  text: '<   SWIPE   >',
  image_src: '/playground_assets/mortgage.jpg',
  Name: 'Name',
}

ApplicationCard.propTypes = {
  JobTitle: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
  Name: PropTypes.string,
}

export default ApplicationCard
