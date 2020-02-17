import React, { useState } from 'react'

import { createStage, checkCollision } from '../gameHelpers'

// Components
import Stage from './Stage'
import Display from './Display'
import StartButton from './StartButton'

// Custom Hooks
import { usePlayer } from '../hooks/usePlayer'
import { useStage } from '../hooks/useStage'

// Functions
import { setStage } from '../gameHelpers'

// Styles
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris'


const Tetris = () => {
    const [dropTime, setDropTime] = useState(null)
    const [gameOver, setGameOver] = useState(false)
  
    const [player, updatePlayerPos, resetPlayer] = usePlayer()
    const [stage, setStage] = useStage(player, resetPlayer)

    console.log('re-render')
  
    const movePlayer = dir => {
      // if we're not collided with anything, we can move!
      if (!checkCollision(player, stage, { x: dir, y: 0 })) {
        updatePlayerPos({ x: dir, y: 0 });
      }
    }
  
    const startGame = () => {
      console.log("test")
      // Reset everything
      setStage(createStage())
      resetPlayer()
      setGameOver(false)
    }
  
    const drop = () => {
      if (!checkCollision(player, stage, { x: 0, y: 1 })) {
        updatePlayerPos({ x: 0, y: 1, collided: false })
      } else {
        // Game Overrr
        // if y is colliding with the top
        if (player.pos.y < 1) {
          console.log("GAME OVER!!!");
          setGameOver(true);
          setDropTime(null);
        }
        updatePlayerPos({ x: 0, y: 0, collided: true });
      }
    }
  
    const dropPlayer = () => {
      drop()
    }
  
    const move = ({ keyCode }) => {
      if (!gameOver) {
        if (keyCode === 37) { // moves left
          movePlayer(-1)
        } else if (keyCode === 39) { // moves right
          movePlayer(1)
        } else if (keyCode === 40) { // moves down
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
            ) : (
              <div>
                <Display text="Score" />
                <Display text="Rows" />
                <Display text="Level" />
              </div>
            )}
            <StartButton callback={startGame} />
          </aside>
        </StyledTetris>
      </StyledTetrisWrapper>
    )
  }
  
  export default Tetris