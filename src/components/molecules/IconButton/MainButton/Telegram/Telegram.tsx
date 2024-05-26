import React from 'react';
import LightSocialText from '../../../../atoms/Text/MainText/LightSocialText';
import socialIcon from '../../../../atoms/ImageLogo/MainIcon/telegram.png';

const Telegram = () => {

    const onClick = () =>{
        alert("Telegram Group: https://t.me/goletshack")
    }

    return (
        <div className='flex gap-2 items-center'>
            <button onClick={onClick}><img src={socialIcon} alt='social'/></button>
            <LightSocialText text='llEHbKU'/>
        </div>
    );
};

export default Telegram;