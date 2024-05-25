import React from 'react';
import AccountText from '../../atoms/Text/LeftSlideText/AccountText';
import logo from '../../atoms/Avatars/AccountAvatar/image 3.png';
import OutProfile from '../IconButton/LeftSlideIcons/OutProfile/OutProfile';

const ProfileLeftSlide = () => {
    return (
        <div className='gap-3 ml-5 mt-7 flex pt-10'>
            <img src={logo} alt='cm'/>
            <div className='grid-cols-5'>
                <AccountText name='Георгий' userName='Церетьян'/>
                <OutProfile text='Выйти'/>
            </div>
        </div>
    );
};

export default ProfileLeftSlide;