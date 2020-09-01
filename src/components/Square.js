import React from 'react'

 const squareStyle = {
   fontSize:'30px',
   fontWeight: '800',
   outline: 'none'
 }

 const Square = ({ position, onMove }) => (
   <button style={squareStyle} onClick={onMove}>
     {position}
   </button>
 )

 export default Square
