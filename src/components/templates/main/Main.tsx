import React from 'react';
import FirstMain from '../../organisms/FirstMain/FirstMain';
import Header from '../../organisms/Header/Header';


const Main = () => {
    return (
        <div>
            <Header/>
            <div className='pt-20'>
            <FirstMain/>
        </div>
        </div>
    );
};

export default Main;