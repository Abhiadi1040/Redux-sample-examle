import React from 'react';
// import PropTypes from 'PropTypes';
import '../styles/LabelField.css'
import LabelField from "./LabelField";

const radioButton = (props) => {

   const { label, onChange, checked, name, defaultChecked } = props
    // const handleChange = (event) => {
    //     const { checked } = event.target;
    //     onChange(checked);
    // };

    return (
        // <div>
        //     <label>
        //         <input
        //         type='radio'
        //         value={checked}
        //         defaultChecked={checked}
        //         onChange={handleChange}>
        //         </input>
        //         {label}

        //     </label>

        // </div>
        <div 
        style={{marginLeft: 10, alignItems:'center'}}
        >
            <input 
            type="radio" 
            name={label}
            value={label}
            defaultChecked={defaultChecked}
            checked={checked}
            onChange={(data)=>onChange(name,data)} 
            {...props} 
            />
            <LabelField value={label} textStyle={{marginLeft:10}}/>
        </div>
    )

};

// radioButton.propTypes = {
//     styleClass: PropTypes.string,
//     selected: PropTypes.bool.isRequired,
//     label: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired
// };

// radioButton.defaultProps = {
//     styleClass: ''
// };

export default radioButton;

