import React from 'react';
import OutTeamButton from '../../../atoms/Button/OutTeamButton/OutTeamButton';
import SettingsTeamButton from '../../../atoms/Button/SettingsTeamButton/SettingsTeamButton';

const SettingsCard = () => {
    return (
        <div className='box-border w-auto bg-white rounded-2xl pt-6 px-24 mt-5'>
            <div className='flex justify-between gap-20'>
                <SettingsTeamButton>Настройки профиля</SettingsTeamButton>
                <OutTeamButton>Покинуть команду</OutTeamButton>
            </div>
        </div>
    );
};

export default SettingsCard;