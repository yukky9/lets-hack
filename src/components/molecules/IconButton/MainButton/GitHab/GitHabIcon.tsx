import React from 'react';
import LightSocialText from '../../../../atoms/Text/MainText/LightSocialText';
import socialIcon from '../../../../atoms/ImageLogo/MainIcon/github.png';

const GitHabIcon = () => {

    const onClick = () =>{
        alert("GitHab: https://github.com/yukky9/lets-hack")
    }

    return (
        <div className='flex gap-2 items-center'>
            <button onClick={onClick}><img src={socialIcon} alt='social'/></button>
            <LightSocialText text='llEHbKU'/>
        </div>
    );
};

export default GitHabIcon;