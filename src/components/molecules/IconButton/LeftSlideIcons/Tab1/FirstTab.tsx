import React from 'react';
import LeftSlideText from '../../../../atoms/Text/LeftSlideText/LeftSlideText';
import ic from "../../../../atoms/ImageLogo/LeftSlideIcon/glav.png"

const FirstTab = () => {
    return (
        <div className='flex gap-2 ml-4'>
            <img src={ic} alt="mcsl"/>
            <LeftSlideText text='Главная'/>
        </div>
    );
};

export default FirstTab;