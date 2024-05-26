import React from 'react';
import { Chrono } from 'react-chrono';

const TimeLine = () => {
    const items = [{
        title: "May 1940",
        cardTitle: "Dunkirk",
        url: "https://www.history.com",
        cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        media: {
            type: "IMAGE",
            source: {
                url: "http://someurl/image.jpg"
            }
        }
    },
        {
            title: "May 1950",
            cardTitle: "Dunkirk",
            url: "https://www.history.com",
            cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
            cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
            media: {
                type: "IMAGE",
                source: {
                    url: "http://someurl/image.jpg"
                }
            }
        },
        {
            title: "May 1950",
            cardTitle: "Dunkirk",
            url: "https://www.history.com",
            cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
            cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
            media: {
                type: "IMAGE",
                source: {
                    url: "http://someurl/image.jpg"
                }
            }
        },];

    return (
        <div className='w-full'>
            <Chrono items={items}/>
        </div>
    );
};

export default TimeLine;