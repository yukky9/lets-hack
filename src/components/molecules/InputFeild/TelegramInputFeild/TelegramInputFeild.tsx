import React from 'react';
import linkIcon from '../../../atoms/ImageLogo/MainIcon/telegram.png';
import OtherLink from '../../../atoms/Input/OtherLink/OtherLink';

const TelegramInputFeild = () => {
    return (
        <div className='flex gap-3 h-8 mt-5'>
            <img src={linkIcon} alt='link'/>
            <OtherLink/>
        </div>
    );
};

export default TelegramInputFeild;