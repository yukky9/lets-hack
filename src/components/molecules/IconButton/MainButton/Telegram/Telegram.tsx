import React from 'react';
import LightSocialText from '../../../../atoms/Text/MainText/LightSocialText';
import socialIcon from '../../../../atoms/ImageLogo/MainIcon/telegram.png';

const Telegram = () => {

    return (
        <div className='flex gap-2 items-center'>
            <a href='https://t.me/goletshack'><img src={socialIcon} alt='social'/></a>
            <LightSocialText text='llEHbKU'/>
        </div>
    );
};

export default Telegram;