const randomAngle = () => Math.floor(Math.random() * 360)

const buildArray = (rows, columns) => {
  const array = []

  for (let y = 0; y < columns; y += 1) {
    const row = []

    for (let x = 0; x < rows; x += 1) {
      row.push([
        randomAngle(),
        randomAngle(),
      ])
    }

    array.push(row)
  }

  return array
}

export default buildArray
