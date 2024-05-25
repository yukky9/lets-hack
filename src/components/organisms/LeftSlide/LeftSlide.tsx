import React from 'react';
import FirstTab from '../../molecules/IconButton/LeftSlideIcons/Tab1/FirstTab';
import SecondTab from '../../molecules/IconButton/LeftSlideIcons/Tab1/SecondTab';
import ThirdTab from '../../molecules/IconButton/LeftSlideIcons/Tab1/ThirdTab';
import TabNotif from '../../molecules/IconButton/LeftSlideIcons/TabNotif/TabNotif';
import ProfileLeftSlide from '../../molecules/ProfileLeftSlide/ProfileLeftSlide';


const LeftSlide = () => {
    return (
        <div>
            <div>
                <ProfileLeftSlide/><br/>
                <TabNotif/><br/>
            </div>
            <FirstTab/><br/>
            <SecondTab/><br/>
            <ThirdTab/><br/>
        </div>
    );
};

export default LeftSlide;