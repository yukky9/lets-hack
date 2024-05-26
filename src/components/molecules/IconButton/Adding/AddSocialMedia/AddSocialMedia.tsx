import React from 'react';
import image from '../../../../atoms/ImageLogo/MainIcon/group62.png';

const AddSocialMedia = () => {
    return (
        <button
            className='bg-white-blue w-20 flex items-center h-7 py-1 px-4 rounded'>
            <img className='ml-4' src={image} alt='dw' width='10' height='10'/>
        </button>
    );
};

export default AddSocialMedia;