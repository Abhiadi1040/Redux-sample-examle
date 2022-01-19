import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import redIcon from '../assets/redIcon.png';
import greenIcon from '../assets/greenIcon.png';

const StatusIcon=({colorFlag})=>{
    return(
        <>
        {colorFlag==='green'?(
            <Image src={greenIcon}></Image>
        ):(
            <Image src={redIcon}></Image>
        )
        }
        </>
    )
};
StatusIcon.propTypes = {
    colorFlag: PropTypes.string.isRequired
  };
  StatusIcon.defaultProps = {
      vacolorFlag: 'green'
  };
  export default StatusIcon;
  