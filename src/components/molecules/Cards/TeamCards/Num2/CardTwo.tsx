import React from 'react';
import avatar from '../../../../atoms/Avatars/TeamAvatar/3389893889_1715625057.jpg.png';
import LeftSlideText from '../../../../atoms/Text/LeftSlideText/LeftSlideText';

const CardTwo = () => {
    return (
        <div className='flex border-2 w-72 border-blue gap-3 rounded-xl'>
            <img className='w-20 p-2' src={avatar} alt='avatar'/>
            <div className='grid items-center'>
                <LeftSlideText text='Александр Михальченков'/>
            </div>
        </div>
    );
};

export default CardTwo;