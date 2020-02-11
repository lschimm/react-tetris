export const STAGE_WIDTH = 12
export const STAGE_HEIGHT = 20

// Function to create stage

export const CreateStage = () => 
    Array.from(Array(STAGE_HEIGHT), () => 
    new Array(Stage_WIDTH).fill([0, 'clear']) 
    )