import React from 'react';
import LeftSlideText from '../../../../atoms/Text/LeftSlideText/LeftSlideText';
import ic from '../../../../atoms/ImageLogo/LeftSlideIcon/svgexport1.png';

const TabNotif = () => {
    return (
        <div className='border-t-2 border-light-grey border-b-2 pt-3 pb-3'>
        <div className='flex gap-2 ml-4 mb-2'>
            <img src={ic} alt="mcsl"/>
            <LeftSlideText text='Новые уведомения'/>
        </div>
        </div>
    );
};

export default TabNotif;