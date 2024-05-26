import React from 'react';
import LeftSlideText from '../../../../atoms/Text/LeftSlideText/LeftSlideText';
import ic from '../../../../atoms/ImageLogo/LeftSlideIcon/comanda.png';


const ThirdTab = () => {
    return (
        <div className='flex gap-2 ml-4'>
            <img src={ic} alt="mcsl"/>
            <LeftSlideText text='Команды'/>
        </div>
    );
};

export default ThirdTab;