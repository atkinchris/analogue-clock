import React from 'react'
import PropTypes from 'prop-types'

import Clock from './Clock'

const Clocks = ({ clocks }) => (
  <div>
    {
      clocks.map((rotations, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Clock key={index} rotations={rotations} />
      ))
    }
  </div>
)

Clocks.propTypes = {
  clocks: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
}

export default Clocks
