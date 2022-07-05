import React from 'react'


const StatusMessage = ({winner , current}) => {

    const noMovesLeft = current.board.every(el => el !== null);
    return (
    <div class="status-message">
        {winner && <>
        Winner is <span class={ winner === 'X' ? 'text-green' : 'text-orange'}>{winner}</span>
        </> }
        {!winner && !noMovesLeft && <>
        Next player is <span class={current.isXNext ? 'text-green' : 'text-orange'}>
        {current.isXNext ? 'X' : 'O'}{''}
        </span>
        </>}
        {!winner && noMovesLeft && `ITS A TIE`}

    </div>
  )
}

export default StatusMessage

// const message = winner ? `winner is ${winner}` : `Next player is ${current.isXNext ? 'X' : 'O'}`;