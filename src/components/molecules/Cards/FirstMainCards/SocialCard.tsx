import React from 'react';
import AddSocialMedia from '../../IconButton/Adding/AddSocialMedia/AddSocialMedia';
import DiscordIcon from '../../IconButton/MainButton/Discord/DiscordIcon';
import GitHabIcon from '../../IconButton/MainButton/GitHab/GitHabIcon';
import OtherIcon from '../../IconButton/MainButton/Other/OtherIcon';
import Telegram from '../../IconButton/MainButton/Telegram/Telegram';
import VKIcon from '../../IconButton/MainButton/VK/VKIcon';


const SocialCard = () => {
    return (
        <div>
        <div className='ml-96 flex gap-10 mt-5 items-center'>
            <Telegram/>
            <DiscordIcon/>
            <GitHabIcon/>
            <a href='/socialmedia'><AddSocialMedia/></a>

        </div>
    <div className='ml-96 mt-3 flex gap-10'>
        <VKIcon/>
        <OtherIcon/>
    </div>
        </div>
)
    ;
};

export default SocialCard;