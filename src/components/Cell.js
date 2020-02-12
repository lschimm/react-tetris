import React from 'react'

// Functions
import { TETROMINOS } from '../tetrominos'

//Styles
import { StyledCell } from './styles/StyledCell'

const Cell = ({ type }) => (
    <StyledCell type={'L'} color={TETROMINOS['L'].color}></StyledCell>
)

export default Cell