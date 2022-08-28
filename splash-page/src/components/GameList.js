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

// Modified code from https://github.com/stella0304/CatalystWebappDemp/blob/main/react-web-app/src/components/RecipeList.js