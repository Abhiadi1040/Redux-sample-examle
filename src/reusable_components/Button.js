import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Button.css';

const Button = ({value, onClick, buttonStyle,name}) => (
   
    <button
        className='app-button'
        name={name}
        onClick={(event) => onClick(value,event)}  style={buttonStyle}>
       {/* <label> */}
            {value}
       {/* </label> */}
    </button>
);

Button.propTypes = {
    styleClass: PropTypes.string,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
    styleClass: 'btn-primary'
};

export default Button;