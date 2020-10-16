import React from 'react';



const timer = (props) => {
    return (
         
    <h1>{props.time <=9 ? `0${props.time}`:props.time}</h1>

    )

}

export default timer