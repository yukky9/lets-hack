import React from 'react';
import FirstMain from '../../organisms/FirstMain/FirstMain';
import MainLeftSlide from '../../templates/LeftSlide/MainLeftSlide';
import Main from '../../templates/main/Main';



const GeneralPage = () => {
    return (
        <div className='flex'>
            <div className='w-80 h-full bg-white border-r-2 border-light-grey fixed'>
                <MainLeftSlide/>
            </div>
            <Main/>
        </div>
    );
};

export default GeneralPage;