import React from 'react'

// Functions
import { TETROMINOS } from '../tetrominos'

//Styles
import { StyledCell } from './styles/StyledCell'

const Cell = ({ type }) => (
    <StyledCell type={type} color={TETROMINOS[type].color}></StyledCell>
)

export default Cell