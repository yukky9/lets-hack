import React from 'react';
import HeaderText from '../../atoms/Text/HeaderText/HeaderText';
import PinBoardDesk from '../../molecules/PinBoardDesk/PinBoardDesk';



const PinBoard = () => {
    return (
        <div className='ml-96'>
            <HeaderText title='PinBoard'/>
            <PinBoardDesk/>
        </div>
    );
};

export default PinBoard;