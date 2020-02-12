import React from 'react'

// Styles
import { StyledStartButton } from './styles/StyledStartButton'

const StartButton = ({ callback }) => (
    <StyledStartButton onclick={callback}>Start Game</StyledStartButton >
)

export default StartButton