import React from 'react';
import LightSocialText from '../../../../atoms/Text/MainText/LightSocialText';
import socialIcon from '../../../../atoms/ImageLogo/MainIcon/globe.png';

const OtherIcon = () => {

    const onClick = () =>{
        alert("Tailwind: https://tailwindcss.com/")
    }

    return (
        <div className='flex gap-2 items-center'>
            <button onClick={onClick}><img src={socialIcon} alt='social'/></button>
            <LightSocialText text='llEHbKU'/>
        </div>
    );
};

export default OtherIcon;