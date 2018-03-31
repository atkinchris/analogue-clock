import React from 'react'
import { render } from 'react-dom'

import './styles.css'

import Clock from './Clock'

const mountElement = document.getElementById('root')

const renderClock = () => {
  const tick = (Date.now() / 30) % 360
  render(
    <Clock tick={tick} />,
    mountElement,
  )

  requestAnimationFrame(renderClock)
}

requestAnimationFrame(renderClock)
