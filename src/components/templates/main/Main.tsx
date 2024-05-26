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
        </div>
    );
};

export default Main;