import { useState } from 'react'

// Functions
import { randomTetromino } from '../tetrominos'

export const usePlayer = () => {
    const [player, setPlayer] = useState()

    // above is shorthand for vvv
    // const playerState = useState()
    // const player = playerState[0]
    // const setPlayer = playerState[1]
}


// name custom hooks === 'use'_____ so react will know it's a custom hook