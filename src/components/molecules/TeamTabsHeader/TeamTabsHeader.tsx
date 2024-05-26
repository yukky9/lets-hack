import React from 'react';
import LeftSlideText from '../../atoms/Text/LeftSlideText/LeftSlideText';
import AddTeamUser from '../IconButton/Adding/AddTeamUser/AddTeamUser';


const TeamTabsHeader = () => {
    return (
        <div className='flex gap-96'>
            <LeftSlideText text='Участники'/>
            <div className='pl-36'>
                <AddTeamUser/>
            </div>
        </div>
    );
};

export default TeamTabsHeader;