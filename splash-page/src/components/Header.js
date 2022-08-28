import React from 'react';
import Button from './Button';

const Header = ({ onAdd, showAdd }) => {

    return (
        <header className='header'>
            <h1 style = {{color: "gold"}}>E</h1>
            <h1 style = {{color: "white"}}>-Sports-</h1>
            <h1 style = {{color: "gold"}}>Harmony</h1>
            <Button color='#00000F' text={showAdd ? 'Close' : 'Create Account'} onClick={onAdd} />
        </header>
    )
}

export default Header;

// Modified code from https://github.com/stella0304/CatalystWebappDemp/blob/main/react-web-app/src/components/Header.js