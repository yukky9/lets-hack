import React from 'react';
import linkIcon from '../../../atoms/ImageLogo/MainIcon/globe.png';
import OtherLink from '../../../atoms/Input/OtherLink/OtherLink';

const OtherInputFeild = () => {
    return (
        <div className='flex gap-3 h-8 mb-5 mt-5'>
            <img src={linkIcon} alt='link'/>
            <OtherLink/>
        </div>
    );
};

export default OtherInputFeild;