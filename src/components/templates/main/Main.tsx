import React from 'react';
import FirstMain from '../../organisms/FirstMain/FirstMain';
import Header from '../../organisms/Header/Header';
import SecondMain from '../../organisms/SecondMain/SecondMain';


const Main = () => {
    return (
        <div>
            <Header/>
            <div className='pt-10'>
                <FirstMain/>
            </div>
            <div className='pt-3'>
                <SecondMain/>
            </div>
            <div className='ml-96 w-80 mt-10 mb-5'>
                <a href='https://t.me/letshack_helper_bot' className='text-blue  border-b-2 border-blue font-bold'>Связь с организаторами</a>
            </div>
        </div>
    );
};

export default Main;