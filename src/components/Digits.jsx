import React from 'react'
import PropTypes from 'prop-types'

import Digit from './Digit'

const Digits = ({ digits }) => (
  <div className="digits">
    {
      digits.map((clocks, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Digit key={index} clocks={clocks} />
      ))
    }
  </div>
)

Digits.propTypes = {
  digits: PropTypes.arrayOf(PropTypes.array).isRequired,
}

export default Digits
