import React from 'react';
import LightSocialText from '../../../../atoms/Text/MainText/LightSocialText';
import socialIcon from '../../../../atoms/ImageLogo/MainIcon/github.png';

const GitHabIcon = () => {

    return (
        <div className='flex gap-2 items-center'>
            <a href='https://github.com/yukky9/lets-hack'><img src={socialIcon} alt='social'/></a>
            <LightSocialText text='llEHbKU'/>
        </div>
    );
};

export default GitHabIcon;