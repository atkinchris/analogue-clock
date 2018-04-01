import React from 'react'
import PropTypes from 'prop-types'

import Digit from './Digit'

const Digits = ({ digits }) => (
  <div className="container">
    <svg viewBox="0 0 800 300" width="100%">
      {
        digits.map((clocks, index) => (
          <g transform={`translate(${index * 200} 0)`} key={index}>
            <Digit clocks={clocks} />
          </g>
        ))
      }
    </svg>
  </div>
)

Digits.propTypes = {
  digits: PropTypes.arrayOf(PropTypes.array).isRequired,
}

export default Digits
