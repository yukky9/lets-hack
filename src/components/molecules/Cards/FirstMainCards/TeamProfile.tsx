import React from 'react';
import logoTeam from '../../../atoms/Avatars/TeamLogoAvatar/logo.png';
import DataText from '../../../atoms/Text/MainText/DataText';
import TeamNameText from '../../../atoms/Text/MainText/TeamNameText';

const TeamProfile = () => {
    return (
        <div className='ml-96 border min-w-96 bg-white rounded-2xl'>
            <img className='m-4 mx-auto w-auto rounded-full items-center' src={logoTeam} alt='teamLogo'/>
            <div className='text-center'>
                <TeamNameText name='IIEHbKU'/>
            </div>
            <div className='mb-4 text-center'>
                <DataText text='Дата создания команды: 13.05.2024 23:19'/>
            </div>
        </div>
    );
};

export default TeamProfile;