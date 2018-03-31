import React from 'react'
import PropTypes from 'prop-types'

const Clock = ({ tick }) => (
  <svg width="100" height="100">
    <circle
      cx="50"
      cy="50"
      r="45"
      className="frame"
    />
    <line
      x1="50"
      y1="50"
      x2="50"
      y2="15"
      className="hand"
      transform={`rotate(${tick} 50 50)`}
    />
    <line
      x1="50"
      y1="50"
      x2="50"
      y2="15"
      className="hand"
      transform={`rotate(${-tick} 50 50)`}
    />
  </svg>
)

Clock.propTypes = {
  tick: PropTypes.number.isRequired,
}

export default Clock
