import React from 'react'
import PropTypes from 'prop-types'

import Clock from './Clock'

const Digit = ({ clocks }) => (
  <div className="digit">
    {
      clocks.map((rotations, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Clock key={index} rotations={rotations} />
      ))
    }
  </div>
)

Digit.propTypes = {
  clocks: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
}

export default Digit
