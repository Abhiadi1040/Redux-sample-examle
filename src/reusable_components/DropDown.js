import React from 'react';
import PropTypes from 'prop-types';
import '../styles/DropDown.css'

const Dropdown = ({value, data, placeholder, styleClass, onChange,label,name, dropdownStyle}) => {
console.log("valuevaluevaluevaluevalue$$$$$$$$$$$$$",name)
    

    return (
        <div className={`form-group ${styleClass}`} >
            {/* {label && <label htmlFor="app-input-field" class="inputLabel">{label}</label>} */}
            <select
              className={(name==="accountingType" ? 'DropdownWidth' : 'Dropdown')}
                value={value}  
                style={dropdownStyle}         
                onChange={(data)=>onChange(name,data)}>
                <option >{placeholder}</option>
                {data.map((item, key) => (
                    <option
                        key={key}
                        value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
        </div>
    )
};

Dropdown.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    data: PropTypes.array.isRequired,
    styleClass: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

Dropdown.defaultProps = {
    value: '',
    styleClass: '',
    placeholder: ''
};

export default Dropdown;