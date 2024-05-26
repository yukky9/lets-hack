import React from 'react';
import TeamTabs from '../../molecules/Tabs/TeamTabs/TeamTabs';
import TeamTabsHeader from '../../molecules/TeamTabsHeader/TeamTabsHeader';

const Team = () => {
    return (
        <div className='ml-96 m-4 p-4 h-96 box-border bg-white rounded'>
            <TeamTabs/>
            <TeamTabsHeader/>
        </div>
    );
};

export default Team;