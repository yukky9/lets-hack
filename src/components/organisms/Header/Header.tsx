import React from 'react';
import HeaderButton from '../../atoms/Button/HeaderButton/HeaderButton';
import HeaderText from '../../atoms/Text/HeaderText/HeaderText';


const Header = () => {
    return (
        <div className='ml-96 translate-y-10 flex items-center gap-96'>
            <HeaderText title='Команда'/>
            <div className='translate-x-96 translate-y-1.5'>
                <HeaderButton>Список команд</HeaderButton>
            </div>
        </div>
    );
};

export default Header;