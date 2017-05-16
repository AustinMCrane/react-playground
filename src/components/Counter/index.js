import React from 'react';
import './styles.css';


const Counter = ({ didMinus, didAdd }) => {
    return (
        <div className="counter">
            <label className="countLabel">Counter</label>
            <div className="counterBox">
                <button onClick={didAdd}>+</button>
                <button onClick={didMinus}>-</button>
            </div>
        </div>
    );
}

export default Counter;
