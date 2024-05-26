import React from 'react';
import avatar from '../../../../atoms/Avatars/TeamAvatar/1201402791_1716386719.jpg.png';
import LeftSlideText from '../../../../atoms/Text/LeftSlideText/LeftSlideText';

const CardFive = () => {
    return (
        <div className='flex border-2 w-72 border-blue gap-3 rounded-xl'>
            <img className='w-20 p-2' src={avatar} alt='avatar'/>
            <div className='grid items-center'>
                <LeftSlideText text='Георгий Церетьян'/>
                <p className='-mt-4 text-xs'>В команде с 24.05.2024</p>
            </div>
        </div>
    );
};

export default CardFive;