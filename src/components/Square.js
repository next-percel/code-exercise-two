import React from 'react'

 const squareStyle = {
   fontSize:'30px',
   fontWeight: '800',
   outline: 'none'
 }

 const Square = ({ move, onMove }) => (
   <button style={squareStyle} onClick={onMove}>
     {move}
   </button>
 )

 export default Square
