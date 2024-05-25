import React from 'react';
import MainLeftSlide from '../../templates/LeftSlide/MainLeftSlide';
import Main from '../../templates/main/Main';



const GeneralPage = () => {
    return (
        <div className='flex'>
            <Main/>
        <div className='w-80 h-full bg-white border-r-2 border-light-grey fixed'>
            <MainLeftSlide/>
        </div>
            </div>
    );
};

export default GeneralPage;