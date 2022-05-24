import React, { useContext } from 'react';
import { UserContext } from '../context/context';
import Counter from '../Counter/counter';
const User = () => {
    const { user } = useContext(UserContext);
    return (
    <div>
       <div> I am a child user:<h1>{user}</h1></div>
       <Counter />
    </div>);
}

export default User;