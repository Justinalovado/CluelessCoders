import React, { useState } from "react";
import {fadeIn} from "react-animations";
import Radium, {StyleRoot} from 'radium';

const styles = {
    fadeIn: {
      animation: 'x 2s',
      animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
  }

const AddUser = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [game, setGame] = useState('');
    const [rank, setRank] = useState('Bronze');
    const [age, setAge] = useState(18);

    const onSubmit = (e) => {
        e.preventDefault();

        if (!name || !gender || !game || !rank || !age) {
            alert('Cannot leave fields empty');
            return;
        }

        onAdd({name, gender, game, rank, age});

        setName('');
        setGender('');
        setGame('');
        setRank('Bronze');
        setAge(18);
    }

    return (
        <StyleRoot>
        <form className='add-form' onSubmit={onSubmit} style={styles.fadeIn}>
            <div className='form-control'>
                <label>Name</label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Gender</label>
                <input type='text' value={gender} onChange={(e) => setGender(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Game</label>
                <input type='text' value={game} onChange={(e) => setGame(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Rank</label>
                <input type='text' value={rank} onChange={(e) => setRank(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Age</label>
                <input type='text' value={age} onChange={(e) => setAge(e.target.value)}/>
            </div>

            <input type='submit' value='Add User' className='btn btn-block'/>
        </form>
        </StyleRoot>
    )
}

export default AddUser;