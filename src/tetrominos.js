export const TETROMINOS = {
    0: { shape: [[0]], color: '0, 0, 0'},
    I: {
        shape: [
                [0, 'I', 0, 0],
                [0, 'I', 0, 0],
                [0, 'I', 0, 0],
                [0, 'I', 0, 0]
                ],
        color: '111, 183, 214',
    },
    J: {
        shape: [
                [0, 'J', 0],
                [0, 'J', 0],
                ['J', 'J', 0],
                ],
        color: '111, 183, 214',
    },
    L: {
        shape: [
                [0, 'L', 0],
                [0, 'L', 0],
                [0, 'L', 'L'],
                ],
        color: '252, 169, 133',
    },
    O: {
        shape: [
                [0, 0],
                [0, 0],
                ],
        color: '1255, 255, 176',
    },
    S: {
        shape: [
                [0, 'S', 'S'],
                ['S', 'S', 0],
                [0, 0, 0],
                ],
        color: '145, 210, 144',
    },
    T: {
        shape: [
                [0, 0, 0],
                ['T', 'T', 'T'],
                [0, 'T', 0],
                ],
        color: '165, 137, 193',
    },
    Z: {
        shape: [
                ['Z', 'Z', 0],
                [0, 'Z', 'Z'],
                [0, 0, 0],
                ],
        color: '255, 105, 97',
    },
}

export const randomTetromino = () => {
    const tetrominos = 'IJLOSTZ'
    const randTetromino =
        tetrominos[Math.floor(Math.random() * tetrominos.length)]
    return TETROMINOS[randTetromino]
}


// original colors

//  color: '80, 227, 230', I
//  color: '36, 95, 223', J
//  color: '223, 173, 36', L
//  color: '223, 217, 36', O
//  color: '48, 211, 56', S
//  color: '132, 61, 198', T
//  color: '227, 75, 78', Z

// new colors

//  color: '80, 227, 230', I
//  color: '36, 95, 223', J
//  color: '223, 173, 36', L
//  color: '223, 217, 36', O
//  color: '48, 211, 56', S
//  color: '132, 61, 198', T
//  color: '227, 75, 78', Z