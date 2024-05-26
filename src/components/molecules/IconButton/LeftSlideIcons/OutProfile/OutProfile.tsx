import React from 'react';
import icon from '../../../../atoms/ImageLogo/LeftSlideIcon/svgexport.png';

type Props = {
    text:string
}

const OutProfile = ({text}:Props) => {
    return (
        <div className='flex'>
            <img src={icon} alt="dk"/>
            <p className="text-lg font-medium text-gray-900 dark:text-blue">{text}</p>
        </div>
    );
};

export default OutProfile;