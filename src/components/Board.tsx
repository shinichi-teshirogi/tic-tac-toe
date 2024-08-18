import { Box, Heading } from '@chakra-ui/react'
import { Cell } from './Cell'
import { useState } from 'react'
import { CellText } from '../types/CellText'

export const Board = () => {
    const [isFirst, setIsFirst] = useState(true)
    const [cells, setCells] = useState<CellText[]>(Array(9).fill(' '))
    const cellClick = (i: number) => {
        if (isWin) return
        if (cells[i] !== ' ') return
        setCells((olds) => {
            olds[i] = isFirst ? 'O' : 'X'
            return [...olds]
        })
        setIsFirst((old) => !old)
    }
    const nowPlayer: CellText = isFirst ? 'O' : 'X'
    const victoryConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    const isWin = victoryConditions.some((victoryCondition) => {
        const [a, b, c] = victoryCondition
        if (cells[a] === ' ') return false
        if (cells[a] !== cells[b]) return false
        if (cells[a] !== cells[c]) return false
        return true
    })
    const winner: CellText = isFirst ? 'X' : 'O'
    
    return (
        <Box>
            <Heading>{isWin ? `${winner} is win!` : `${nowPlayer}'s turn`}</Heading>
            <Box>
                <Cell text={cells[0]} onClick={() => cellClick(0)} />
                <Cell text={cells[1]} onClick={() => cellClick(1)} />
                <Cell text={cells[2]} onClick={() => cellClick(2)} />
            </Box>
            <Box>
                <Cell text={cells[3]} onClick={() => cellClick(3)} />
                <Cell text={cells[4]} onClick={() => cellClick(4)} />
                <Cell text={cells[5]} onClick={() => cellClick(5)} />
            </Box>
            <Box>
                <Cell text={cells[6]} onClick={() => cellClick(6)} />
                <Cell text={cells[7]} onClick={() => cellClick(7)} />
                <Cell text={cells[8]} onClick={() => cellClick(8)} />
            </Box>
        </Box>
    )
}