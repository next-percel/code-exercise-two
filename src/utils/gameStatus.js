import { constants } from '../constants'
export const isWon = squares => {
  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let winCombination = 0; winCombination < winCombinations.length; winCombination++) {
    const [position1, position2, position3] = winCombinations[winCombination];
    
    const firstPositionFilled = squares[position1]
    const matchWithSecondPosition = squares[position1] === squares[position2]
    const matchWithThirdPosition = squares[position1] === squares[position3]
    
    if (firstPositionFilled && matchWithSecondPosition && matchWithThirdPosition) {
      return true
    }
  }
  return false
}

export const isDraw = (winner, squares) => {
  const filledSquaresCount = squares.filter(square => square !== null ).length
  return !winner && filledSquaresCount === constants.TOTAL_SQUARES
} 
