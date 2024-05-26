import React from 'react';
import LightSocialText from '../../../../atoms/Text/MainText/LightSocialText';
import socialIcon from '../../../../atoms/ImageLogo/MainIcon/vk.png';

const VkIcon = () => {

    return (
        <div className='flex gap-2 items-center'>
            <a href='https://vk.com/yulyvaw'><img src={socialIcon} alt='social'/></a>
            <LightSocialText text='llEHbKU'/>
        </div>
    );
};

export default VkIcon;