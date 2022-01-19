import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {validateInput} from "../utilities/Validator";
import '../styles/InputField.css';

const InputField = ({value, label, placeholder, validators, type, onChange,styles, name, textFieldStyle}) => {
    const [error, setError] = useState(false);
 
    // const handleChange = (event) => {
    //     const {value} = event.target;
    //     setError(validateInput(validators, value));
    //     onChange(value);
    // };

    return (
        <div className="form-group">
            {type === 'textarea' ? (
                <textarea
                    className='inputTextArea'
                    placeholder={placeholder}
                    value={value}
                    name={name}
                    onChange={(data)=>onChange(name,data)}
                />
            ) : (
                <input
                    type={type}
                    value={value}
                    className='input'
                    name={name}
                    placeholder={placeholder}
                    onChange={(data)=>onChange(name,data)}
                    style={textFieldStyle}
                />
            )}
            {error && <span className='text-danger'>{error.message}</span>}
        </div>
    )
};

InputField.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    validators: PropTypes.array,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

InputField.defaultProps = {
  value: '',
  label: '',
  placeholder: '',
  type: 'text',
  validators: []
};

export default InputField;