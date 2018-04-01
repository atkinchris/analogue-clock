import React from 'react'
import PropTypes from 'prop-types'

const buildPosition = (index) => {
  const x = (index % 2) * 100
  const y = Math.floor(index / 2) * 100

  return `translate(${x}, ${y})`
}

const Digit = ({ clocks }) => clocks.map((rotations, index) => (
  <g transform={buildPosition(index)} key={index}>
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
))

Digit.propTypes = {
  clocks: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
}

export default Digit
