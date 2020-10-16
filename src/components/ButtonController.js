import React from 'react';
import './button.css';

 const ButtonController = (props) => {

		return (
				<button className='inc-button' onClick={() => props.onhandler()}>
		    	{props.paused?"play":"pause"}
		    </button>
		);
	};


export default ButtonController;