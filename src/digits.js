const CORNER_TOP_LEFT = [90, 180]
const CORNER_TOP_RIGHT = [180, 90]
const CORNER_BOTTOM_LEFT = [0, 270]
const CORNER_BOTTOM_RIGHT = [0, 90]
const LINE_VERTICAL = [0, 180]
const LINE_UP = [0, 0]
const LINE_DOWN = [180, 180]
const LINE_LEFT = [270, 90]
const LINE_RIGHT = [90, 270]
const REST = [225, 135]

const DIGIT_ZERO = [
  CORNER_TOP_LEFT, CORNER_TOP_RIGHT,
  LINE_VERTICAL, LINE_VERTICAL,
  CORNER_BOTTOM_LEFT, CORNER_BOTTOM_RIGHT,
]

const DIGIT_ONE = [
  REST, LINE_DOWN,
  REST, LINE_VERTICAL,
  REST, LINE_UP,
]

const DIGIT_TWO = [
  LINE_RIGHT, CORNER_TOP_RIGHT,
  CORNER_TOP_LEFT, CORNER_BOTTOM_RIGHT,
  CORNER_BOTTOM_LEFT, LINE_LEFT,
]

const DIGIT_THREE = [
  LINE_RIGHT, CORNER_TOP_RIGHT,
  LINE_RIGHT, CORNER_BOTTOM_RIGHT,
  LINE_RIGHT, CORNER_BOTTOM_RIGHT,
]

const DIGIT_FOUR = [
  LINE_DOWN, LINE_DOWN,
  CORNER_BOTTOM_LEFT, LINE_VERTICAL,
  REST, LINE_UP,
]

const DIGIT_FIVE = [
  CORNER_TOP_LEFT, LINE_LEFT,
  CORNER_BOTTOM_LEFT, CORNER_TOP_RIGHT,
  LINE_RIGHT, CORNER_BOTTOM_RIGHT,
]

const DIGIT_SIX = [
  CORNER_TOP_LEFT, LINE_LEFT,
  LINE_VERTICAL, CORNER_TOP_RIGHT,
  CORNER_BOTTOM_LEFT, CORNER_BOTTOM_RIGHT,
]

const DIGIT_SEVEN = [
  LINE_RIGHT, CORNER_TOP_RIGHT,
  REST, LINE_VERTICAL,
  REST, LINE_UP,
]

const DIGIT_EIGHT = [
  CORNER_TOP_LEFT, CORNER_TOP_RIGHT,
  CORNER_BOTTOM_LEFT, CORNER_BOTTOM_RIGHT,
  CORNER_BOTTOM_LEFT, CORNER_BOTTOM_RIGHT,
]

const DIGIT_NINE = [
  CORNER_TOP_LEFT, CORNER_TOP_RIGHT,
  CORNER_BOTTOM_LEFT, LINE_VERTICAL,
  LINE_RIGHT, CORNER_BOTTOM_RIGHT,
]

export default {
  0: DIGIT_ZERO,
  1: DIGIT_ONE,
  2: DIGIT_TWO,
  3: DIGIT_THREE,
  4: DIGIT_FOUR,
  5: DIGIT_FIVE,
  6: DIGIT_SIX,
  7: DIGIT_SEVEN,
  8: DIGIT_EIGHT,
  9: DIGIT_NINE,
}
