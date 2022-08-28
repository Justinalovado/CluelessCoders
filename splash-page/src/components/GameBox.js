import React from 'react';
import Button from './Button';

const GameBox = ({ game, onAdd, showAdd }) => {


    return (
        <div className='game'>
            {game.logo}
                <h3>
                    {game.name}
                </h3>
                <div>
                    <p style={{ color: "steelblue" }}> 
                    <b style={{ color: "black", fontSize: "25px" }}>Players Online:</b> {game.onlinePlayers}
                    </p>
                    <p style={{ color: "grey" }}>
                        <b style={{ color: "black" }}>Players (Last 30 Days):</b> {game.playersInLast30Days}
                    </p>
                    <Button color='black' text={showAdd ? 'Close' : 'Start Searching'} onClick={onAdd} />
                </div>
        </div>
    )
}

export default GameBox;

// Modified code from https://github.com/stella0304/CatalystWebappDemp/blob/main/react-web-app/src/components/RecipeBox.js