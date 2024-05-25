import React from 'react';
import MainLeftSlide from '../../templates/LeftSlide/MainLeftSlide';
import Main from '../../templates/main/Main';



const GeneralPage = () => {
    return (
        <div className='w-80 h-full bg-white'>
            <Main/>
            <MainLeftSlide/>
        </div>
    );
};

export default GeneralPage;