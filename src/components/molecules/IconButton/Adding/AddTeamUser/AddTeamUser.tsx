import React from 'react';
import image from '../../../../atoms/ImageLogo/MainIcon/group62.png';

const AddTeamUser = () => {
    return (
        <button
            className='ml-96 bg-white-blue w-48 flex items-center h-10 py-1 px-2 rounded gap-3'>
            <img className='ml-4' src={image} alt='dw' width='10' height='10'/>
            <p className='text-xs text-blue font-bold'>Добавить участника</p>
        </button>
    );
};

export default AddTeamUser;