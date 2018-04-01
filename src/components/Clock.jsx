import React from 'react'
import PropTypes from 'prop-types'

const Clock = ({ rotations }) => (
  <g>
    <circle cx="50" cy="50" r="45" className="frame" />
    <g transform={`rotate(${rotations[0]} 50 50)`}>
      <line x1="50" y1="40" x2="50" y2="15" strokeLinecap="square" className="hand" />
      <line x1="50" y1="50" x2="50" y2="25" strokeLinecap="round" className="hand" />
    </g>
    <g transform={`rotate(${-rotations[1]} 50 50)`}>
      <line x1="50" y1="40" x2="50" y2="15" strokeLinecap="square" className="hand" />
      <line x1="50" y1="50" x2="50" y2="25" strokeLinecap="round" className="hand" />
    </g>
  </g>
)

Clock.propTypes = {
  rotations: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default Clock
