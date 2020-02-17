import { useState, useEffect } from 'react'

// Functions
import { createStage } from '../gameHelpers'

export const useStage = (player, resetPlayer) => {
    const [stage, setStage] = useState(createStage());

    useEffect(() => {
        const updateStage = prevStage => {
            // first clear the stage
            const newStage = prevStage.map(row => 
                row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell))
                )
            // Then draw the tetromino
            player.tetromino.forEach((row, y) => {
                row.forEach((value, x) => {
                    //check which cells are occupied//know shape of tetromino
                    if(value !== 0) {
                        newStage[y + player.pos.y][x + player.pos.x] = [
                            value,
                            `${player.collided ? 'merged' : 'clear'}`
                        ]
                    }
                })
            })
            // Then check if we collided
            if (player.collided) {
                resetPlayer()
            }
            return newStage
        }
            
        setStage(prev => updateStage(prev))

    }, [player, resetPlayer])
  
    return [stage, setStage];
  }