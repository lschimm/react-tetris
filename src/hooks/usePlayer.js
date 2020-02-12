import { useState } from 'react'

// Functions
import { randomTetromino } from '../tetrominos'

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: { x: 0, y: 0},
        tetromino: randomTetromino().shape,
        collided: false,
    })

    return [player]
}


// name custom hooks === 'use'_____ so react will know it's a custom hook


//const [player, setPlayer] = useState()
// above is shorthand for vvv
// const playerState = useState()
// const player = playerState[0]
// const setPlayer = playerState[1]
