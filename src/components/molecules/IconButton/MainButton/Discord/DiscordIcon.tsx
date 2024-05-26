import React from 'react';
import socialIcon from '../../../../atoms/ImageLogo/MainIcon/discord.png';
import LightSocialText from '../../../../atoms/Text/MainText/LightSocialText';

const DiscordIcon = () => {

    const onClick = () =>{
        alert("Discord Server: https://discord.gg/effjXBrc")
    }

    return (
        <div className='flex gap-2 items-center'>
            <button onClick={onClick}><img src={socialIcon} alt='social'/></button>
            <LightSocialText text='llEHbKU'></LightSocialText>
        </div>
    );
};

export default DiscordIcon;