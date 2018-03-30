import React from 'react'
import { render } from 'react-dom'

import './styles.css'

const mountElement = document.getElementById('root')

render(
  <h1>Hello world</h1>,
  mountElement,
)
