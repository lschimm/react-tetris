import { useState, useCallback } from 'react'

// Functions
import { TETROMINOS, randomTetromino } from '../tetrominos'
import { STAGE_WIDTH } from '../gameHelpers'

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: { x: 0, y: 0},
        tetromino: TETROMINOS[0].shape,
        collided: false,
    })

    
    const updatePlayerPos = ({ x, y, collided }) => {
        setPlayer(prev => ({
            ...prev, 
            pos: { x: (prev.pos.x += x), y: (prev.pos.y += y)},
            collided,
        }))
    }
    
    const resetPlayer = useCallback(() => {
        setPlayer({
            pos: { x: STAGE_WIDTH / 2 - 2, y: 0}, // set it in the middle // and at the top
            tetromino: randomTetromino().shape,
            collided: false,
        })
    }, [])
    
    return [player, updatePlayerPos, resetPlayer]
}
// name custom hooks === 'use'_____ so react will know it's a custom hook

//const [player, setPlayer] = useState()
// above is shorthand for vvv
// const playerState = useState()
// const player = playerState[0]
// const setPlayer = playerState[1]