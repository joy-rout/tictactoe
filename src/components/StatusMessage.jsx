import React from 'react'


const StatusMessage = ({winner , current}) => {

    const noMovesLeft = current.board.every(el => el !== null);
    return (
    <h2>
        {winner && `Winner is ${winner}` }
        {!winner && !noMovesLeft && `Next player is ${current.isXNext ? 'X' : 'O'}`}
        {!winner && noMovesLeft && `ITS A TIE`}

    </h2>
  )
}

export default StatusMessage

// const message = winner ? `winner is ${winner}` : `Next player is ${current.isXNext ? 'X' : 'O'}`;