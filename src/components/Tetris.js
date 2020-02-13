import React, { useState } from 'react'


// Components
import Stage from './Stage'
import Display from './Display'
import StartButton from './StartButton'

// Custom Hooks
import { usePlayer, updatePlayerPos, resetPlayer } from '../hooks/usePlayer'
import { useStage } from '../hooks/useStage'

// Functions
import { setStage } from '../gameHelpers'

// Styles
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris'


const Tetris = () => {
    const [dropTime, setDropTime] = useState(null)
    const [gameOver, setGameOver] = useState(false)

    const [player] = usePlayer()
    const [stage, setStage] = useStage(player)



    
    //console.log('re-rendering')
    
    const movePlayer = dir => {
        // takes care of left and right movement
        updatePlayerPos({ x: dir, y: 0 })
    }

    const startGame = () => {
        // Reset everything
        setStage(createStage())
        resetPlayer()
    }

    const drop = () => {
        updatePlayerPos({ x: 0, y: 1, collided: false})
    }

    const dropPlayer = () => {
        drop()
    }

    const move = () => {
        if (!gameOver){
            if (keyCode === 37) { //i.e. moving left
                movePlayer(-1) 
            } else if (keyCode === 39) { //i.e. moving right
                movePlayer(1)
            } else if (keyCode === 40) { // i.e. moving down
                dropPlayer()
            }
        }
    }

    return (
        <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
            <StyledTetris>
                <Stage stage={stage} />
                <aside>
                    {gameOver ? (
                        <Display gameOver={gameOver} text="Game Over" />
                        ): (
                            <div>
                        <Display text="Score" />
                        <Display text="Rows" />
                        <Display text="Level" />
                    </div>
                        )}
                    <StartButton onClick={startGame} />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}
export default Tetris