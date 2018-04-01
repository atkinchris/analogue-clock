import React from 'react'
import PropTypes from 'prop-types'

import Digits from './Digits'

const App = ({ digits }) => (
  <div className="container">
    <Digits digits={digits} />
  </div>
)

App.propTypes = {
  digits: PropTypes.arrayOf(PropTypes.array).isRequired,
}

export default App
