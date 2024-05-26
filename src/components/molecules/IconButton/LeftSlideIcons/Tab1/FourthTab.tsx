import React from 'react';
import LeftSlideText from '../../../../atoms/Text/LeftSlideText/LeftSlideText';
import ic from '../LeftSlideIcon/timeline.png';

const FourthTab = () => {
    return (
        <div className='flex gap-2 ml-4'>
            <img src={ic} alt="mcsl"/>
            <LeftSlideText text='Таймлайн'/>
        </div>
    );
};

export default FourthTab;