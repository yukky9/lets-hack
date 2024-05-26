import React from 'react';
import LeftSlideText from '../../../../atoms/Text/LeftSlideText/LeftSlideText';
import ic from '../../../../atoms/ImageLogo/LeftSlideIcon/myprofile.png'

const SecondTab = () => {
    return (
        <div className='flex gap-2 ml-4'>
            <img src={ic} alt="mcsl"/>
            <LeftSlideText text='Мой профиль'/>
        </div>
    );
};

export default SecondTab;