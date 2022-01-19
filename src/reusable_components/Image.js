import React from 'react';

const Image = (props) => {

   const { image, imageStyle } = props
    return (
        <div 
        // style={{marginLeft: 5, alignItems:'center'}}
        >
            <img src={image} style={imageStyle} />
        </div>
    )

};

export default Image;