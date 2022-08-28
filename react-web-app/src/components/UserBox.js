import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Button from './Button';

const UserBox = ({ user, onDelete, onVisit }) => {
    const [hover, setHover] = useState(false);


    return (
        <div className='user' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <h3>
              {user.name}
              {hover && <FaTimes
                style={{ cursor: 'pointer' }}
                //onClick={logId}
                onClick={() => onDelete(user._id)}
              />}
            </h3>
            <p><b>gender:</b> {user.gender}</p>
            <p><b>game:</b> {user.game}</p>
            <p><b>rank:</b> {user.rank}</p>
            <p><b>age:</b> {user.age}</p>
            {/* <input type='submit' value='see' className='search-button'>show players</input> */}
            <Button text="visit" onClick={onVisit}></Button>
        </div>
    )
}

export default UserBox;