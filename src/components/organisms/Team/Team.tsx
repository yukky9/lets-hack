import React from 'react';
import CardOne from '../../molecules/Cards/TeamCards/Num1/CardOne';
import CardTwo from '../../molecules/Cards/TeamCards/Num2/CardTwo';
import CardThree from '../../molecules/Cards/TeamCards/Num3/CardThree';
import CardFour from '../../molecules/Cards/TeamCards/Num4/CardFour';
import CardFive from '../../molecules/Cards/TeamCards/Num5/CardFive';
import TeamTabs from '../../molecules/Tabs/TeamTabs/TeamTabs';
import TeamTabsHeader from '../../molecules/TeamTabsHeader/TeamTabsHeader';


const Team = () => {
    return (
        <div className='ml-96 m-4 p-4 h-96 box-border bg-white rounded'>
            <TeamTabs/>
            <TeamTabsHeader/>
            <div className='grid'>
                <div className='flex gap-40 mt-8'>
                    <CardOne/>
                    <CardTwo/>
                    <CardThree/>
                </div>
                <div className='flex gap-40 mt-10'>
                    <CardFour/>
                    <CardFive/>
                </div>
            </div>
        </div>
    );
};

export default Team;