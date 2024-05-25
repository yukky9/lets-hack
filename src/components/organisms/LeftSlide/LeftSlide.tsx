import React from 'react';
import EighthTab from '../../molecules/IconButton/LeftSlideIcons/Tab1/EighthTab';
import FifthTab from '../../molecules/IconButton/LeftSlideIcons/Tab1/FifthTab';
import FirstTab from '../../molecules/IconButton/LeftSlideIcons/Tab1/FirstTab';
import FourthTab from '../../molecules/IconButton/LeftSlideIcons/Tab1/FourthTab';
import SecondTab from '../../molecules/IconButton/LeftSlideIcons/Tab1/SecondTab';
import SeventhTab from '../../molecules/IconButton/LeftSlideIcons/Tab1/SeventhTab';
import SixthTab from '../../molecules/IconButton/LeftSlideIcons/Tab1/SixthTab';
import ThirdTab from '../../molecules/IconButton/LeftSlideIcons/Tab1/ThirdTab';
import TabNotif from '../../molecules/IconButton/LeftSlideIcons/TabNotif/TabNotif';
import ProfileLeftSlide from '../../molecules/ProfileLeftSlide/ProfileLeftSlide';
import logoimg from '../../atoms/ImageLogo/Logo/logo.png'


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
            <FourthTab/><br/>
            <FifthTab/><br/>
            <SixthTab/><br/>
            <SeventhTab/><br/>
            <EighthTab/><br/>
            <div className='mt-5 ml-20 pb-10'>
                <img src={logoimg} alt='logo'/>
            </div>
        </div>
    );
};

export default LeftSlide;