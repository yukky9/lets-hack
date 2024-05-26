import React from 'react';
import socialIcon from '../../../../atoms/ImageLogo/MainIcon/discord.png';
import LightSocialText from '../../../../atoms/Text/MainText/LightSocialText';

const DiscordIcon = () => {

    return (
        <div className='flex gap-2 items-center'>
            <a href='https://discord.gg/effjXBrc'><img src={socialIcon} alt='social'/></a>
            <LightSocialText text='llEHbKU'></LightSocialText>
        </div>
    );
};

export default DiscordIcon;