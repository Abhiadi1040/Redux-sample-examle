import React from 'react';
import PropTypes from 'prop-types';
import '../styles/LabelField.css'
 
const LabelField=({value,flag, textStyle, mandatory})=>{
return(
    <>
    {flag === true ? (
        <div className="divWithBorder">
        <label className="labelWithBorder" style={textStyle}>{value}</label>
        </div>
    ) : (
    <><label 
    className='labelNoBorder'
    style={textStyle}
    >{value}</label>{mandatory?<span class="star">*</span>:null}</>
    )}
    </>
)
};
LabelField.propTypes = {
  value: PropTypes.string,
  flag: PropTypes.string.isRequired
};
LabelField.defaultProps = {
    value: ' '
};
export default LabelField;
