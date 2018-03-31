import React from 'react'
import { render } from 'react-dom'

import './styles.css'

import Clocks from './Clocks'

const mountElement = document.getElementById('root')
let showTime = true
const tick = 1
const targets = [
  [225, 225],
]
const clocks = [
  [0, 0],
]

const update = () => {
  const time = new Date().getSeconds()

  showTime = time < 25

  for (let index = 0; index < clocks.length; index += 1) {
    const clock = clocks[index]
    const target = targets[index]

    if (!showTime || clock[0] !== target[0]) {
      clock[0] = (clock[0] + tick) % 360
    }

    if (!showTime || clock[1] !== target[1]) {
      clock[1] = (clock[1] + tick) % 360
    }
  }

  render(
    <Clocks clocks={clocks} />,
    mountElement,
  )

  requestAnimationFrame(update)
}

requestAnimationFrame(update)
