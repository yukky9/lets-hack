import React from 'react';
import DescripTeam from '../../molecules/Cards/FirstMainCards/DescripTeam';
import Tasks from '../../molecules/Cards/FirstMainCards/Tasks';
import TeamProfile from '../../molecules/Cards/FirstMainCards/TeamProfile';
import SettingsCard from "../../molecules/Cards/FirstMainCards/SettingsCard";
import SocialCard from '../../molecules/Cards/FirstMainCards/SocialCard';


const FirstMain = () => {
    return (
        <div>
            <div className=' flex gap-8 w-full'>
                <div className='grid grow'>
                    <TeamProfile/>
                    <SocialCard/>
                </div>
                <div className='grid grow'>
                    <Tasks/>
                    <DescripTeam/>
                    <SettingsCard/>
                </div>
            </div>
        </div>
    );
};

export default FirstMain;