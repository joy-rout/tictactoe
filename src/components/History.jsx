import React from 'react'

const History = ({history , moveTo , currentMove}) => {
  return (
    <div class="history-wrapper">
    <ul class="history">
        {history.map((_, move) => {
            return(
                <li key={move}>
                  <button 
                  class = {`btn-move ${move === currentMove ? 'active' : ''}`}
                  onClick={() => {
                    moveTo(move)
                  }}>
                    {move === 0 ? 'Go To Game Start' : `Go To Move #${move}`}
                    </button>  
                </li>
            );
        })}
        
    </ul>
    </div>
  );
};

export default History