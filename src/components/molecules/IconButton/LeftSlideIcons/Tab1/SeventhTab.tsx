import React from 'react';
import LeftSlideText from '../../../../atoms/Text/LeftSlideText/LeftSlideText';
import ic from '../../../../atoms/ImageLogo/LeftSlideIcon/resheniya.png';

const SeventhTab = () => {
    return (
        <div className='flex gap-2 ml-4'>
            <img src={ic} alt="mcsl"/>
            <LeftSlideText text='Решения'/>
        </div>
    );
};

export default SeventhTab;