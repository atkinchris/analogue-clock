import React from 'react'
import { render } from 'react-dom'

import './styles.css'

import Digits from './components/Digits'
import DIGITS from './digits'

const mountElement = document.getElementById('root')
const tick = 1
const digits = [
  [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
  [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
  [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
  [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
]

const update = () => {
  const date = new Date()
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const seconds = date.getSeconds()
  const time = `${hours}${minutes}`

  const showTime = seconds < 25

  time.split('').forEach((character, digitIndex) => {
    const digit = DIGITS[character]
    const clocks = digits[digitIndex]

    clocks.forEach((clock, clockIndex) => {
      const position = digit[clockIndex]

      if (!showTime || clock[0] !== position[0]) {
        // eslint-disable-next-line no-param-reassign
        clock[0] = (clock[0] + tick) % 360
      }

      if (!showTime || clock[1] !== position[1]) {
        // eslint-disable-next-line no-param-reassign
        clock[1] = (clock[1] + tick) % 360
      }
    })
  })

  render(
    <Digits digits={digits} />,
    mountElement,
  )

  requestAnimationFrame(update)
}

requestAnimationFrame(update)
