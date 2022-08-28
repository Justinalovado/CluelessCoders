import React from 'react';
import RecipeBox from './RecipeBox';
import UserBox from './UserBox';

const UserList = ( {users, onDelete, onVisit} ) => {
    return (
        <div className='user-list'>
            {users.map ((user) => (
                <UserBox key={user.id} user={user} onDelete={onDelete} onVisit={onVisit}/>
            ))}
        </div>
    )
}

export default UserList;