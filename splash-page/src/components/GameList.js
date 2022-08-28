import React from 'react';
import GameBox from './GameBox';

const GameList = ({ games }) => {
    return (
        <div className='game-list'>
            {games.map ((game) => (
                <GameBox key={game.id} game={game}/>
            ))}
        </div>
    )
}

export default GameList;