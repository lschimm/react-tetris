export const STAGE_WIDTH = 12
export const STAGE_HEIGHT = 20

// Function to create stage

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, 'clear'])
  )



// for loop will be faster than map or for each for this
// won't be able to break out of the loop once we collide with something with foreach

export const checkCollision = (player, stage, { x: moveX, y:moveY }) => {
  // loop through tetromino
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[0].length; x += 1 ) {
      // first check if we're on tetromino cell // check it isn't 0
      if (player.tetromino[y][x] !== 0) {
        if (
        // Check tetromino move is inside height of the stage (y)
        !stage[y + player.pos.y + moveY] ||
        // Check tetromino move is inside the width of the stage (x)
        !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
        // Check that the cell isn't set to 'clear'
        stage[y +  player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
        ) {
          return true
        }
      }
    }
  }
}