import { useState, useCallback } from 'react'

// Functions
import { TETROMINOS, randomTetromino } from '../tetrominos'
import { STAGE_WIDTH, checkCollision } from '../gameHelpers'
import Stage from '../components/Stage'

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: { x: 0, y: 0},
        tetromino: TETROMINOS[0].shape,
        collided: false,
    })

    const rotate = (matrix, dir) => {  
        // Make the rows columns 
        const rotatedTetro = matrix.map((_, index) => 
        matrix.map(col => col[index])
        )
        // Reverse each row to get the rotated tetromino (matrix)
        if (dir > 0) return rotatedTetro.map(row => row.reverse())
        return rotatedTetro.rev()
    }

    const playerRotate = (stage, dir) => {
        const clonedPlayer = JSON.parse(JSON.stringify(player))
        // gets a complete copy of the player
        clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir)

        // prevent tetromino from rotating off stage
        const pos = clonedPlayer.pos.x
        let offset = 1
        // the tetromino will check right and left if it is colliding with each movement
        while(checkCollision(clonedPlayer, stage, { x:0, y:0 })){
            clonedPlayer.pos.x +=  offset
            offset = -(offset + (offset > 0 ? 1 : -1))
            if (offset > clonedPlayer.tetromino[0].length) {
                //reverses the direction if there's no space for it
                rotate(clonedPlayer.tetromino, -dir)
                // it'll keep the same direction
                clonedPlayer.pos.x = pos
            }
        }

        setPlayer(clonedPlayer)
    }

    
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
    
    return [player, updatePlayerPos, resetPlayer, playerRotate]
}
// name custom hooks === 'use'_____ so react will know it's a custom hook

//const [player, setPlayer] = useState()
// above is shorthand for vvv
// const playerState = useState()
// const player = playerState[0]
// const setPlayer = playerState[1]