
import React, { useContext } from 'react'
import { UserContext } from '../context/context';

const Counter = () => {
    const { count, setCount } = useContext(UserContext);
    const handleIncrement = () => {
        setCount(count + 1);
    }
    const handleDecrement = () => {
        setCount(count - 1);
    }
    return (
        <div>

            <h1> <button onClick={handleIncrement}>+</button>{count}<button onClick={handleDecrement}>-</button></h1>

        </div>);
}

export default Counter;