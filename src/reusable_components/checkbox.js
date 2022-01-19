import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({label, selected, styleClass, onChange,name,checked}) => {

    // const handleChange = (event) => {
    //     const {checked} = event.target;
    //     onChange(checked);
    // };

    return (
        <div className={`form-group ${styleClass}`}>
            <label>
                <input
                    type="checkbox"
                    className='mr-2'
                    value={selected}
                    defaultChecked={selected}
                    name={name}
                    checked={checked}
                    onChange={(data)=>onChange(name,data)} 
                    />

                {label}
            </label>
        </div>
    )
};

Checkbox.propTypes = {
    styleClass: PropTypes.string,
    selected: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

Checkbox.defaultProps = {
    styleClass: ''
};

export default Checkbox;