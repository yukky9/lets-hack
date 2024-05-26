import React from 'react';
import avatar from '../../../../atoms/Avatars/TeamAvatar/3175816484_1716569578.png.png';
import LeftSlideText from '../../../../atoms/Text/LeftSlideText/LeftSlideText';

const CardFour = () => {
    return (
        <div className='flex border-2 w-72 border-blue gap-3 rounded-xl'>
            <img className='w-20 p-2' src={avatar} alt='avatar'/>
            <div className='grid items-center'>
                <LeftSlideText text='Алексей Базин'/>
                <p className='-mt-4 text-xs'>В команде с 14.05.2024</p>
            </div>
        </div>
    );
};

export default CardFour;