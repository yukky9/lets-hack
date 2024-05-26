import React from 'react';
import LightSocialText from '../../../../atoms/Text/MainText/LightSocialText';
import socialIcon from '../../../../atoms/ImageLogo/MainIcon/globe.png';

const OtherIcon = () => {

    return (
        <div className='flex gap-2 items-center'>
            <a href='https://tailwindcss.com/'><img src={socialIcon} alt='social'/></a>
            <LightSocialText text='llEHbKU'/>
        </div>
    );
};

export default OtherIcon;