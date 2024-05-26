import React from 'react';

import Promo from '../../molecules/Promo/Promo';
import PinBoard from '../PinBoard/PinBoard';
import Team from '../Team/Team';
import EndHack from '../Timers/EndHack/EndHack';
import ToCheckPoint from '../Timers/ToCheckPoint/ToCheckPoint';

const SecondMain = () => {
    return (
        <div>
            <div className='flex gap-10'>
                <Promo/>
                <div className='flex gap-2'>
                    <EndHack/>
                    <ToCheckPoint/>
                </div>
            </div>
            <div className='flex gap-10'>
                <PinBoard/>
            </div>
            <Team/>
        </div>
    );
};

export default SecondMain;