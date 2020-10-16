import React from 'react'
import './button.css';

const ResetButton = (props) => {

    return (
        
            <button className='dec-button' onClick={() => props.onClickreset()}>Reset</button>
        
    )
}

export default ResetButton